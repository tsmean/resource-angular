import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ResourceModule} from './resource/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResourceModule.forRoot('blablub')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
