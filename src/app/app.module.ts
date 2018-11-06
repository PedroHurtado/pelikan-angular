import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './modules/core/core.module';
import {MdcModule} from './modules/mdc/mdc.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MdcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
