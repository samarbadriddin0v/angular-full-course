import { Component, inject, OnInit } from '@angular/core';
import { CarService } from '../serviecs/car.service';
import { Reservation } from '../models/reservation';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-list',
  imports: [DatePipe, RouterLink],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
  standalone: true,
})
export class CarList implements OnInit {
  reservationList: Reservation[] = [];
  reservetionService = inject(CarService);

  ngOnInit(): void {
    this.reservationList = this.reservetionService.getReservations();
  }

  deleteReservation(id: number): void {
    this.reservetionService.deleteReservation(id);
    this.reservationList = this.reservetionService.getReservations();
  }
}
