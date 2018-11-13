import { ColumnSelectable } from "./column.selectable.js";

export class ColumnSelectableBody extends ColumnSelectable{
    constructor(options,index,data){
        super(options,index);
        this.data = data;
    }
    changeSelection(){
        super.changeSelection();
        this.emit('select',this.select);
    }
}