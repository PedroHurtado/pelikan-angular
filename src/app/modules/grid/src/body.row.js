import { Row } from './row.js';
import { ColumnBody } from './column.body.js';
import { ColumnBodyInfo } from './column.body.info.js';
import { ColumnBodyBoolen } from './column.body.boolean.js';
import { Node } from './node.js';
import { converters } from './converters.js';
import { flatObject } from './util.js'
import { ColumnSelectableBody } from './column.selectable.body.js';

export class BodyRow extends Row {
    constructor(options, columns, rowData) {
        super(options.row, columns);
        this.rowData = rowData || {};
        this._flatData = null;
        this.rowColumns = options.rowColumns;
    }
    get flatData() {
        if (!this._flatData) {
            this._flatData = flatObject(this.rowData);
        }
        return this._flatData;
    }
    getData(converter, data, attribute) {
        if (!converter) {
            return data[attribute];
        } else {
            let handlerConvert = converters[converter.type];
            if (typeof handlerConvert === 'function') {
                let params=[];
                if (converter.params)
                    params = (converter.params||[]).map(p=>this.flatData[p]);
                else{
                    params.push(data[attribute]);
                }
                return handlerConvert.apply(null, params);
            }
        }
    }
    createNodes(){
        
    }

    render() {
        let columns = this.options.columns.map((c, index) => {
            let text = this.getData(c.converter, this.rowData, c.attribute);
            if (c.selectable) {
                let newColumn = Object.assign({}, c);
                return new ColumnSelectableBody(newColumn, index,this.rowData);
            }
            else if (c.grid) {
                let data = text || [];
                let newColumn = Object.assign({}, c, { data: data });
                return new ColumnBodyInfo(newColumn, index);
            } else if (c.type === 'Boolean') {
                let newColumn = Object.assign({}, c, { text: text });
                return new ColumnBodyBoolen(newColumn, index);
            }
            else {
                let newColumn = Object.assign({}, c, { text: text });
                return new ColumnBody(newColumn, index);
            }

        });
        if(this.rowColumns){
            let rowColumns = new Node(this.rowColumns, 'div', columns);
            this.nodes=[rowColumns];
        }
        else {
            this.nodes = columns;
        }
        return super.render();
    }
}