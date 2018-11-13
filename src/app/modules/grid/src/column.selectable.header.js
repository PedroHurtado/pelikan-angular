import {ColumnSelectable} from './column.selectable.js'

export class ColumnSelectableHeader extends ColumnSelectable{
    constructor(options,index){
        super(options,index)
    }
    selectedHandler(ev){
        super.selectedHandler(ev);
        this.toggleBodyColumnsSelected();
    }
    toggleBodyColumnsSelected(){
        let columns = [...document.querySelectorAll('.grid__body .grid__column__selectable')];
        columns.forEach(c=>{
            let component = c.parentNode.__pelikan;
            component.selected = this.selected;
            component.changeSelection();
        });
    }
}