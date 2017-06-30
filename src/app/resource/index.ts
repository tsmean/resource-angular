import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

export const ApiUrl = new InjectionToken('Resource.ApiUrl');

export function createResourceModule(apiUrl: string) {
  @NgModule({
    imports: [
      CommonModule
    ],
    providers: [
      { provide: ApiUrl, useValue: apiUrl },
    ],
    declarations: []
  })
  class ResourceModule { }

  return {
    ngModule: ResourceModule,
    providers: [

    ]
  };
}
