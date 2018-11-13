import { Node } from "./node.js";
import { Paginator } from './paginator/paginator.js'
import {Select} from './select/select.js'

export class Footer extends Node {
    constructor(options) {
        super({ classList: ['grid__footer'] });
        this.nodes = this.createNodes(options);
        
    }
    createNodes(options) {
        return [
            new Paginator(1500,25),
            new Select(options.records,options.records.data),
        ];
    }
}
