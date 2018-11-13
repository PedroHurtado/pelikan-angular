import { Node } from "../node.js";

function stopEvent(ev) {
    
    ev.preventDefault();
}

export class Paginator extends Node {
    constructor(count, pageRecord) {
        super({ classList: ['paginator'] });
        this.count = count;
        this.pageRecord = pageRecord;
        this.start = 0;
        this.pages = this.end=3;
        this._page = this.start;
        this.actualPage = 0;
        if (this.total<this.end){
            this.pages = this.end =  this.total;
        }
        this.group= this.createGroup();
        
        this.createNodes();
    }
    createNodes() {
        this.nodes.push(this.createPrevious());
        this.nodes.push(this.group);
        this.nodes.push(this.createPlus());
        this.nodes.push(this.createTotal());
        this.nodes.push(this.createNext());
    }
    createGroup(){
        return new Node({classList:['paginator__group']},'div',this.createChildGroup())
      
    }
    createChildGroup() {
        let visiblePages = [];
        let events = {
            click: this.handleSelected.bind(this),
        }
        for (let i = this.start; i < this.end; i++) {
            let text = i + 1;
            let classList = ['paginator__item', 'paginator__item--sibiling'];
            if (i === this._page) {
                classList = ['paginator__item', 'paginator__item--sibiling', 'paginator__item--selected'];
            }
            let node = new Node({ classList, text, events, page: i }, 'div');
            visiblePages.push(node);
        }
        return visiblePages;
    }
    set page(value) {
        this._page = value;
    }
    refresh() {
        this.group.nodes = this.createChildGroup();
        this.group.changes = true;
    }
    handleSelected(ev) {
        stopEvent(ev);
        this.page = ev.target.__pelikan.options.page;
        this.refresh();
    }
    handlerPlus(ev) {
        stopEvent(ev);
        this.start = this.end;
        this.end = this.start + this.pages;
        if (this.end > this.total) {
            this.end = this.total;
            this.start = this.end - (this.pages);
        }
        this.page = this.start;
        this.refresh();
    }
    handlerPrevious(ev) {
        stopEvent(ev);
        this.start = this.start - 1;
        if (this.start < 0) {
            this.start = 0;
        }
        this.end = this.start + this.pages;
        this.page = this.start;
        this.refresh();
    }
    handlerNext(ev) {
        stopEvent(ev);
        this.start = this.start + 1;
        this.end = this.start + this.pages;
        if (this.end > this.total) {
            this.end = this.total;
            this.start = this.end - (this.pages);
        }
        this.page = this.start;
        this.refresh();
    }
    handlerTotal(ev) {
        stopEvent(ev);
        this.end = this.total;
        this.start = this.end - (this.pages);
        this.page = this.end - 1;
        this.refresh();
    }
    get total() {
        return Math.ceil(this.count / this.pageRecord);
    }
    createPlus() {
        let text = '...';
        let events = {
            click: this.handlerPlus.bind(this),
        }
        let classList = ['paginator__item', 'paginator__item--sibiling'];
        return new Node({ classList, text, events }, 'div')
    }
    createTotal() {
        let events = {
            click: this.handlerTotal.bind(this),
        }
        let text = this.total;
        let classList = ['paginator__item', 'paginator__item--sibiling'];
        return new Node({ classList, text, events }, 'div')
    }
    createPrevious() {
        let events = {
            click: this.handlerPrevious.bind(this),
        }
        return new Node({ classList: ['paginator__item', 'paginator__item--first'], events }, 'div',
            new Node({ classList: ['paginator__img'], attributes: { src: '/assets/img/ic-prev-pag.svg' } }, 'img')
        );
    }
    createNext() {
        let events = {
            click: this.handlerNext.bind(this),
        }
        return new Node({ classList: ['paginator__item', 'paginator__item--sibiling'], events }, 'div',
            new Node({ classList: ['paginator__img'], attributes: { src: '/assets/img/ic-next-pag.svg' } }, 'img')
        );
    }
}


