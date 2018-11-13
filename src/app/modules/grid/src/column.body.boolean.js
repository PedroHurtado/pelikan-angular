import { ColumnBody } from './column.body.js';
import { Node } from './node.js';

export class ColumnBodyBoolen extends ColumnBody {
    constructor(options, index) {
        //clone array before concat classListBody and classList
        let text = options.text;
        let classList = (options.classList || []).map(c => c);
        super(options, index);
        this.classList = classList;
        this.text = text;
        this.nodes = [this.createBoolNode()];


    }
    createBoolNode() {
        let classList = this.options.classListBody;
        
        if (this.text) {

            return new Node(
                { classList: classList }, 'div',
                new Node({
                    classList: ['grid__column__boolean__check']
                },'div')
            );
        } else {
            return new Node({ classList: classList }, 'div');
        }
    }
}