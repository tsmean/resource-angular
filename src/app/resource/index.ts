import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResourceService} from './resource.service';
import {HttpModule} from '@angular/http';
import {ResourceStoreService} from './resource.store';

export const ApiUrl = new InjectionToken('Resource.ApiUrl');

export function createResourceModule(apiUrl: string) {

  @NgModule({
    imports: [
      CommonModule,
      HttpModule
    ],
    declarations: []
  })
  class ResourceModule { }

  return {
    ngModule: ResourceModule,
    providers: [
      { provide: ApiUrl, useValue: apiUrl },
      ResourceService,
      ResourceStoreService
    ]
  };
}
