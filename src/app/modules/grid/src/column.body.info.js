import { ColumnBody } from './column.body.js'
import { Node } from './node.js';
import { Grid } from './grid.js'

export class ColumnBodyInfo extends ColumnBody {
    constructor(options, index) {
        options.text = '';
        super(options, index);
        this.open = false;
        this.nodes = [this.createNodes()];
        this.subGrid = null;
    }
    createNodes() {
        let events = {
            click: this.openHandler.bind(this)
        };
        if (!this.open) {
            return new Node({
                classList: ['grid__column--info'], 
                events: events
            }, 'div',
                new Node({ classList: ['grid__column--info-horizontal'] }, 'div'),
                new Node({ classList: ['grid__column--info-vertical'] }, 'div')
            );
        }
        else {
            return new Node({
                classList: ['grid__column--info', 'grid__column--info-open'],
                events:events
            }, 'div',
                new Node({ classList: ['grid__column--info-horizontal'] }, 'div'),
            );
        }

    }
    openHandler(ev) {
       
        ev.preventDefault();
        this.open = !this.open;
        if (this.open) {
            this.createSubGrid();

        } else {
            if (this.subGrid) {
                this.subGrid.remove();
                this.subGrid = null;
            }
        }
        this.nodes = [this.createNodes()];
        this.changes = true;
    }

    createSubGrid() {
        let parent = this.__node.parentNode.parentNode.parentNode;
        let subGrid = new Grid(this.options.grid);
        let rect = this.__node.getBoundingClientRect();
        let element = subGrid.render();
        subGrid.data = this.options.data;
        this.setMarginLeftFirstColumn(element, rect);
        parent.appendChild(element);
        this.subGrid = element;
    }
    setMarginLeftFirstColumn(element, rect) {
        let firstColumns = [...element.querySelectorAll('.grid__column--first')];
        firstColumns.forEach(col => {
            col.style.marginLeft = `${rect.left}px`;
        });
    }


}