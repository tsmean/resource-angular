
import {Injectable} from '@angular/core';
import {Resource} from './resource';
@Injectable()
export class ResourceStoreService {

  /**
   * Store for resources.
   * For example, the store could have such a resource:
   * resourceStore['heroes']['412'] is {id: '412', name: 'Wolverine'}
   */
  private resourceStore: ResourceStore = {};

  add (resourceName: string, resourceId: string, resource: Resource): void {
    // Initialization if not yet initialized already;
    this.resourceStore[resourceName] = this.resourceStore[resourceName] || {};

    this.resourceStore[resourceName][resourceId] = resource;
  }

  remove (resourceName: string, resourceId: string): void {
    delete this.resourceStore[resourceName][resourceId];
  }

  get (resourceName: string, resourceId: string): Resource {
    return this.resourceStore[resourceName][resourceId];
  }

  update (resourceName: string, resourceId: string, resource: Resource): void {
    this.resourceStore[resourceName][resourceId] = resource;
  }

}

interface ResourceStore {
  [resourceName: string]: {
    [resourceId: string]: Resource
  };
}
