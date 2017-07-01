import { Component } from '@angular/core';
import {ResourceService} from './resource/resource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private resourceService: ResourceService
  ) {
    resourceService.getResources('heroes');
  }

}
