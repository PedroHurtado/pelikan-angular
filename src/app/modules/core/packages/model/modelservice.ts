import { Injectable } from '@angular/core';

/**
 * Service so the validations of a given model
 * can access all of its properties.
 * 
 * @export
 * @class ModelService
 */
@Injectable()
export class ModelService {
    _model = null;
    constructor() {

    }
    set model(value) {
        this._model = value;
    }
    get model() {
        return this._model;
    }
}
