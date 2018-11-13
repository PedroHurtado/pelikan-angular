import { Node } from '../node.js';
import { BodyRow } from '../body.row.js'
export class List extends Node {
    constructor(options,data) {
        super(options, 'ul');
        this.data = data || [];
        this.createItems();
        
        
    }
    createItems() {
        this.nodes = this.data.map((rowData, index) => {
            let row = new BodyRow(this.options.rows,this.options.columns,rowData);
            row.nodeType = 'li';
            return row;
        });
    }
}