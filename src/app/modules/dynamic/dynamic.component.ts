import {
    Component,
    NgModule,
    Compiler,
    Injector,
    NgModuleRef,
    ComponentRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core'

import {CoreModule} from '../core/core.module'
import {MdcModule} from '../mdc/mdc.module'
@Component({
    selector: 'plk-dynamic',
    template: '<div #vc></div>'
})
export class DynamicComponent {

    @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
    /**
     *
     */
    constructor(
        private compiler: Compiler,
        private injector: Injector,
        private moduleRef: NgModuleRef<any>,

    ) { }

    private cmpRef: ComponentRef<any>;

    ngAfterViewInit() {
        this.createComponentFromRaw('<div><plk-text bind-data="data"></plk-text></div>')
    }
    private createComponentFromRaw(template: string) {

        const tmpCmp = Component({ template:template,selector:'plk-loader' })(class {
            public data:string='hello world'
        });

        
        const tmpModule = NgModule({
            imports:[CoreModule,MdcModule],
            declarations: [tmpCmp],
        })(class { });

       
        this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
            .then((factories) => {
                const f = factories.componentFactories[1];
                this.cmpRef = f.create(this.injector, [], null, this.moduleRef);
                this.cmpRef.instance.name = 'my-dynamic-component';
                this.vc.insert(this.cmpRef.hostView);
            });
    }
}