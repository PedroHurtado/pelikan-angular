import { Column } from "./column.js";
import { Node } from './node.js';
export class ColumnSelectable extends Column {
    constructor(options, index) {
        super(options, index);
        this.nodes = [this.createNodes()];
        this.selected = false;
    }
    selectedHandler(ev){
        ev.preventDefault();
        this.selected = !this.selected;
        this.changeSelection();
    }
    changeSelection(){
        this.nodes=[this.createNodes()];
        this.changes = true;
    }

    createNodes() {
        let events={
            click:this.selectedHandler.bind(this),
        };
        if (this.selected) {
            return new Node({
                classList: this.options.selectable.selected.classList,
                events:events,
            }, 'div');
        } else {
            return new Node({
                classList: this.options.selectable.unselected.classList,
                events:events,
            }, 'div');
        }
    }
   
}