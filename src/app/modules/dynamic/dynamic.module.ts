
import { NgModule } from '@angular/core';
import { DynamicComponent } from './dynamic.component'


@NgModule({
    declarations: [
        DynamicComponent
    ],
    exports: [
        DynamicComponent
    ]
})
export class DynamicModule { }
