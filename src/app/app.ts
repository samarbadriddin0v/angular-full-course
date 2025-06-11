import { Component } from '@angular/core';
import { CarList } from './car-list/car-list';

@Component({
  selector: 'app-root',
  template: ` <app-car-list></app-car-list> `,
  imports: [CarList],
})
export class App {
  protected title = 'angular-course';
}
