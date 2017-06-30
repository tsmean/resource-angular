import {Inject, Injectable} from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Resource} from './resource';
import { ApiUrl } from './index';

import { WebUtils } from '@tsmean/utils';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ResourceService {


  constructor(
    private http: Http,
    @Inject(ApiUrl) private apiUrl: string
  ) { }

  /**
   * Url to web api, appended with resource name
   * yields e.g http://myserver/api/v1/users
   */
  private resourcesUrl(resourceName: string) {
    return WebUtils.urlJoin(this.apiUrl, resourceName);
  };


  getResources(resourceName: string): Observable<Resource[]> {
    return this.http.get(this.resourcesUrl(resourceName))
      .map(resp => resp.json().data)
      .catch(this.handleError);
  }

  getResource(resourceId: string, resourceName: string): Observable<Resource> {
    return this.http.get(WebUtils.urlJoin(this.resourcesUrl(resourceName), resourceId))
      .map(resp => resp.json().data)
      .catch(this.handleError);
  }

  createResource(newResource: Resource, resourceName: string): Observable<Resource> {
    return this.http.post(this.resourcesUrl(resourceName), newResource)
      .map(resp => resp.json().data)
      .catch(this.handleError);
  }

  updateResource(resource: Resource, resourceName: string): Observable<Resource> {
    return this.http.put(this.resourcesUrl(resourceName), resource)
      .map(resp => resp.json().data)
      .catch(this.handleError);
  }

  deleteResource(resourceId: string, resourceName: string): Observable<Resource> {
    return this.http.delete(WebUtils.urlJoin(this.resourcesUrl(resourceName), resourceId))
      .map(resp => resp.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
