import {validationDefaults} from './validationdefaults';
export class ValidationConfig {
    public  validations;
    public validators;
    public modelKeyword;
    public defaultValidationError;
    public validatorLibrary;
    public customValidators;
    constructor() {
        Object.assign(this, validationDefaults);
    }
    init() {
        this._mergeValidators();
    }
   

    _mergeValidators() {
        this.validators = {
            ...(this.customValidators),
            ...(this.validatorLibrary)
        };
    }
    addValidators(validators) {
        // TODO
    }
    addValidations(validations) {
        // TODO
    }
}