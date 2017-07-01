import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResourceService} from './resource.service';
import {HttpModule} from '@angular/http';

export const ApiUrl = new InjectionToken('Resource.ApiUrl');

export * from './resource.service';
export * from './resource';
export * from './resource.store';


export function createResourceModule(apiUrl: string) {
  @NgModule({
    imports: [
      CommonModule,
      HttpModule
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
      ResourceService
    ]
  };
}
