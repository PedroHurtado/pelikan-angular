import { Node } from './node.js';
import { BodyRow } from './body.row.js'
export class Body extends Node {
    constructor(options, columns) {
        super(options);
        this._data = [];
        this.columns = columns;
    }
    set data(value) {
        this._data = value || [];
        this.createNodes();
        this.changes = true;
    }
    createNodes() {
        this.nodes = this._data.map(row => {
            let node = new Node(
                { classList: ['grid__body__row__parent'] }
                ,'div'
                ,new BodyRow(this.options.rows, this.columns, row)
            )
            return node;
        });
    }
}