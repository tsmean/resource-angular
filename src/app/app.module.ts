import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {createResourceModule} from './resource/index';

const resourceModule =
  createResourceModule('http://demo.tsmean.com:4242/api/v1/');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    resourceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
