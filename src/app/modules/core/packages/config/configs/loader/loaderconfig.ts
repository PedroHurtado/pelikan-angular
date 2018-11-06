import {loaderDefaults} from './loaderdefaults';
export class LoaderConfig {
    public namespace;
    public routes;
    constructor() {
        Object.assign(this, loaderDefaults);
    }
   
    addRoutes(routes){
        // TODO
    }
}