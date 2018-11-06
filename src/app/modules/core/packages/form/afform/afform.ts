import {Component, ViewChild, Input} from '@angular/core';
import {FormService} from '../formservice';


/**
 * Wrapper for the <form> element, we need this in
 * order to programatically add form controls through
 * the FormService when not using the directive ngModel.
 * 
 * @export
 * @class AfForm
 */
@Component({
    selector: 'af-form',
    templateUrl: './afform.html',
    providers: [FormService]
})
export class AfForm {
    @ViewChild('frm') form;
    @Input() onSubmit;
    constructor(private formService: FormService) {
        
    }
    ngAfterViewInit() {
        this.formService.form = this.form;
    }
    ngOnDestroy() {
        this.formService.dispose();
    }
    /**
     * TODO: 
     *  -> Add utility methods, such as isValid() to interact
     *     with the inner form.
     *  -> Submit system.
     */
}