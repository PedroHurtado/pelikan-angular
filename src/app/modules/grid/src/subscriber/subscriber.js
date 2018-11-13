export class Subscriber {
    constructor(chanel) {
        this.handlers = new Map();
        this.chanel = chanel;
    }
    on(name, handler) {
        let handlers = this.handlers.get(name);
        if (handlers) {
            handlers.push(handler)
        } else {
            this.handlers.set(name,[handler]);
        }
        return this;
    }
    emit(name,args) {
        let handlers = this.handlers.get(name);
        if(handlers){
            handlers.forEach(handler => {
                handler.apply(null,args)
            });
        }
    }
}