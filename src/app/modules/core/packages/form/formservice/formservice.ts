import {Injectable} from '@angular/core';

/**
 * Adds form controls to a form so Angular can
 * validate it, used when there is no ngModel
 * in the input element.
 * Must be scoped to angular AFForm component. 
 * 
 * @export
 * @class FormService
 */
@Injectable()
export class FormService {
    private _form = null;
    private _controls = [];
    constructor() {
        
        
    }
    set form(value) {
        this._form = value;
        /**
        * Since form inner elements render before the form itself
        * controls will be added beforehand, therefore we can
        * add the controls when setting the form.
        */
        this._form && this._controls["forEach"]((c) => this._form.addControl(c));
    }
    addControl(control, name) {
        control && name && this._controls["push"](
            window["Object"].assign(control, {name})
        );
    }
    dispose() {
        // TODO: check if when angular destroys the form component
        // the instance of the formService is destroyed aswell so
        // we may not need this method.
        this._controls = [];
        this._form = null;
    }
}