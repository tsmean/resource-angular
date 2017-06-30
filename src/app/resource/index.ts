import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ResourceService } from './resource.service.ts';

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


/*
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    // { provide: ApiUrl, useValue: apiUrl },
  ],
  declarations: []
})
export class ResourceModule { }
*/
