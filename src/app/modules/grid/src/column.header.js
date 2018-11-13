import { Column } from './column.js';
import { Node } from './node.js'

export class ColumnHeader extends Column {
    constructor(options, index) {
        super(options, index);
        if (options.classListHeader) {
            this.classList = this.classList.concat(options.classListHeader);
        }
        this.sort = this.options.sort;
        this.checkSort();
        if (this.options.sortable) {
            this.sortNode = this.createSort();
            this.nodes.push(this.sortNode)
        }
    }
    checkSort() {
        this.classDown = 'grid__column__sort__column__i--down';
        this.classUp = 'grid__column__sort__column__i--up';

        if (this.sort) {
            if (this.sort === 'asc') {
                this.classUp = 'grid__column__sort__column__i--upselected';
            }
            else {
                this.classDown = 'grid__column__sort__column__i--downselected';
            }
        }
      
    }
    sortAsc(ev) {
      
        if (this.sort === 'asc') {
            this.sort = undefined;
        } else {
            this.sort = 'asc'
        }
        this.checkSort();
        this.changeSortNode();
        this.emit('sort',this.sort);
    }
    sorDesc(ev) {
       
        if (this.sort === 'desc') {
            this.sort = undefined;
        } else {
            this.sort = 'desc'
        }
        this.checkSort();
        this.changeSortNode();
        this.emit('sort',this.sort);
    }
    changeSortNode() {
        let index = this.nodes.indexOf(this.sortNode);
        if (index > -1) {
            this.nodes.splice(index, 1)
            this.sortNode = this.createSort();
            this.nodes.push(this.sortNode);
            this.changes=true;
        }
    }
    createSort() {
        let down = new Node({
            classList: ['grid__column__sort__column'],
            events: {
                click: this.sorDesc.bind(this)
            }
        }, 'p',
            new Node({
                classList: [
                    'grid__column__sort__column__i',
                    this.classDown
                ]
            }, 'i')
        );

        let up = new Node({
            classList: ['grid__column__sort__column'],
            events: {
                click: this.sortAsc.bind(this)
            }
        }, 'p',
            new Node({
                classList: [
                    'grid__column__sort__column__i',
                    this.classUp
                ]
            }, 'i')
        );

        let sort = new Node({ classList: ['grid__column__sort'] }, 'div', up, down);
        return sort;
    }
}