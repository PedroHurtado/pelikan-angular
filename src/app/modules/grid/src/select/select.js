import { Node } from '../node.js';
import { List } from './list.js';
import {createElement} from '../domutil.js';
export class Select extends Node {
    constructor(options, data) {
        super(options);
        this.options.events = {
            click: this.handerClick.bind(this),
        }

        let { columns, selectable } = {
            columns: options.columns,
            selectable: options.selectable
        }
        if (selectable) {
            columns.unshift(this.createSelectableColumn(selectable))
        }

        this._data = data || [];
        this.open = false;

        this.nodes = [this.createNodes()];

        this.list = new List(Object.assign({},
            this.options.list,
            {events:{
                click:this.listHandlerClick.bind(this),
            }},
            { columns: this.options.columns }
        ), this._data);

        this.__listNode = null;
    }
    set data(value) {
        this._data = value || [];
        this.__listNode =  null;
        this.changes = true;

    }
    listHandlerClick(ev){
        if (!this.options.list.closeList){
            ev.stopPropagation();
        }
    }
    handerClick(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.toggleOpen();
    }
    toggleOpen() {
        this.open = !this.open;
        if (this.open) {
            this.showListNode()
        } else {
            this.__listNode.remove();
        }
    }
    showListNode() {
        this.createBackDrop();
        if (!this.__listNode) {
            this.__listNode = this.list.render();
        }
        this.__listNode.style.position = 'absolute';
        this.__node.appendChild(this.__listNode);
        let rectList = this.__listNode.getBoundingClientRect();
        let rect = this.__node.getBoundingClientRect();
        this.setPosition(rect, rectList)
        this.__listNode.style.zIndex = 9999;

    }
    createBackDrop(){
        let div = createElement('div');
        let handlerEvent = function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            div.remove();
            this.toggleOpen();
            div.removeEventListener('click',handlerEvent,false);
        }.bind(this);
       
        div.style.position = 'fixed';
        div.style.top = '0px';
        div.style.left = '0px';
        div.style.width = '100%';
        div.style.height = '100%';
        div.style.zIndex = 9998;
        div.style.background = "trasparent";
        div.addEventListener('click',handlerEvent,false);
        this.__node.appendChild(div);
        
    }
    setPosition(rectSelect, rectList) {
        if (rectSelect.bottom + rectList.height >= window.innerHeight) {
            this.__listNode.style.bottom = `${rectSelect.height+1}px`;
        }
        if (rectSelect.right + rectList.width >= window.innerWidth) {
            this.__listNode.style.right = `${1}px`;
        }

    }
    createNodes() {
        let text = (this._data[0] && this._data[0].text) || '';
        return new Node({
            classList: ['select__header']
        }, 'div',
            new Node({
                classList: ['select__header__span'],
                text: text,
            }, 'span'),
            new Node({
                classList: ['select__header__img'],
                attributes: {
                    src: '/assets/img/arrow-dropdown.svg'
                }
            }, 'img')
        );
    }
    createSelectableColumn(selectable) {
        return {
            visible: true,
            classList: (selectable.classList || []).map(c => c),
            selectable: Object.assign({}, {
                selected: selectable.selected,
                unselected: selectable.unselected,
            }),
        };
    }
    render() {
        let node = super.render();
        if (this.options.width) {
            node.style.width = `${this.options.width}px`;
        }
        return node;
    }
}