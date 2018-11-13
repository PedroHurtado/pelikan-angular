import {Row} from './row.js';
import {ColumnHeader} from './column.header.js';
import { ColumnSelectableHeader } from './column.selectable.header.js';

export class HeaderRow extends Row
{
    constructor(options,columns){
        super(options,columns);
        
    }
    render(){
        this.nodes = this.options.columns.map((c,index)=>{
            let newColumn = Object.assign({},c);
            if(c.selectable){
                return new ColumnSelectableHeader(newColumn,index);
            }else
            {
                return new ColumnHeader(newColumn,index);
            }
            
            
        })
        return super.render();
    }
}