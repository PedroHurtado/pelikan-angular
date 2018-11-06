import {
    Component, NgZone
} from '@angular/core';

import {FormService}from '../../../../modules/core/packages';
import {BaseComponent} from '../basecomponent';
import {MDCTextField} from '@material/textfield';


@Component({
    selector: 'af-input',
    templateUrl: './afinput.html',
    styleUrls:['./afinput.scss']
})
export class AfInput extends BaseComponent {
    constructor(formService: FormService, ngZone: NgZone) {
        super(formService, ngZone);
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this._mdcComponent = new MDCTextField(this._nativeElement);
    }
}
