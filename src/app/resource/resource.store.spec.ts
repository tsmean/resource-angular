import { TestBed, inject } from '@angular/core/testing';

import { ResourceService } from './resource.service';
import {ResourceStoreService} from './resource.store';

describe('ResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResourceStoreService
      ]
    });
  });

  it('should be able to create the service',
    inject([ResourceStoreService],
      (resourceStoreService: ResourceStoreService) => {
        expect(resourceStoreService).toBeTruthy();
      })
  );

  it('should be able to create and read',
    inject([ResourceStoreService],
      (resourceStoreService: ResourceStoreService) => {
        resourceStoreService.add('heroes', '413', {
          uid: '413',
          name: 'Wolverine'
        });
        expect(resourceStoreService.get('heroes', '413').uid).toEqual('413');
        expect(resourceStoreService.get('heroes', '413').name).toEqual('Wolverine');
      })
  );

  it('should be able to update',
    inject([ResourceStoreService],
      (resourceStoreService: ResourceStoreService) => {
        resourceStoreService.add('heroes', '413', {
          uid: '413',
          name: 'Wolverine'
        });
        expect(resourceStoreService.get('heroes', '413').uid).toEqual('413');
        expect(resourceStoreService.get('heroes', '413').name).toEqual('Wolverine');
        resourceStoreService.update('heroes', '413', {
          uid: '413',
          name: 'Wonder Woman'
        });
        expect(resourceStoreService.get('heroes', '413').uid).toEqual('413');
        expect(resourceStoreService.get('heroes', '413').name).toEqual('Wonder Woman');
      })
  );

  it('should be able to delete',
    inject([ResourceStoreService],
      (resourceStoreService: ResourceStoreService) => {
        resourceStoreService.add('heroes', '413', {
          uid: '413',
          name: 'Wolverine'
        });
        expect(resourceStoreService.get('heroes', '413').uid).toEqual('413');
        expect(resourceStoreService.get('heroes', '413').name).toEqual('Wolverine');
        resourceStoreService.remove('heroes', '413');
        expect(resourceStoreService.get('heroes', '413')).toBeUndefined();
      })
  );


});
