import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {createResourceModule} from './resource/index';
// import {ResourceModule} from './resource/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    createResourceModule('http://demo.tsmean.com:4242/api/v1/')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
