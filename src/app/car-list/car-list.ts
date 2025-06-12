import { Component, inject } from '@angular/core';
import { CarService } from '../serviecs/car.service';

@Component({
  selector: 'app-car-list',
  imports: [],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
  standalone: true,
})
export class CarList {
  reservetionService = inject(CarService);

  constructor() {
    console.log(this.reservetionService.getReservations());
  }
}
