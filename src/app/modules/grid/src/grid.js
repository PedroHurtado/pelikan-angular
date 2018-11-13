import { Node } from './node.js'
import { Header } from './header.js';
import { Body } from './body.js';
import { Footer } from './grid.footer.js'
import { Subscriber } from './subscriber/subscriber.js'
export class Grid extends Node {
    constructor(options) {
        super(options);
        let { columns, selectable,footer } = {
            columns: options.columns,
            selectable: options.selectable,
            footer:options.footer
        }
        if (selectable) {
            columns.unshift(this.createSelectableColumn(selectable))
        }
        this.header = new Header(options.header, columns);
        this.body = new Body(options.body, columns);

        let scroll = new Node({classList:['grid__scroll']});
        scroll.nodes=[this.header, this.body];
       
        if(footer){
            this.nodes.push(new Footer(footer));
        }
        this.nodes.push(scroll);        
       
       
        this._subscriber = new Subscriber('grid');
        this.subscriber.on('sort', () => {
            console.log('sort');
        }).on('select', () => {
            console.log('select');
        });


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
    set data(value) {
        this.body.data = value;
       // this.setChildSubscriptor();
    }
    setChildSubscriptor() {
        function* flatNodes(nodes) {
            for (let node of nodes) {
                if (Array.isArray(node.nodes)) {
                    yield node;
                    yield* flatNodes(node.nodes);
                } else if (Array.isArray(node)) {
                    yield* flatNodes(node);
                }
            }
        }
        let nodes = [...flatNodes(this.nodes)];
        nodes.forEach(node => node.subscriber = this.subscriber);
    }


}