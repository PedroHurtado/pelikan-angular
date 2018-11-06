import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import {AfInput} from './packages'
import {CoreModule} from '../../modules/core/core.module'
const ELEMENTS = [
    AfInput
];
const MODULES = [    
    FormsModule,
    CoreModule,
    CommonModule
];

@NgModule({
    imports: MODULES,
    exports: ELEMENTS,
    declarations: ELEMENTS
})
export class MdcModule { }
