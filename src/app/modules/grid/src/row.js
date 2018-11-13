import {Node} from './node.js'
export class Row extends Node{
    constructor(options,columns){
        super(options);
        this.options.columns = (columns||[]).filter(c=>c.visible);
    }
}