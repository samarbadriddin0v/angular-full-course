import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CarService } from '../serviecs/car.service';

@Component({
  selector: 'app-car-form',
  imports: [ReactiveFormsModule],
  templateUrl: './car-form.html',
  styleUrl: './car-form.css',
  standalone: true,
})
export class CarForm {
  carService = inject(CarService);

  reservationForm: FormGroup = new FormGroup({
    checkIn: new FormControl('', [Validators.required]),
    checkOut: new FormControl('', [Validators.required]),
    clientName: new FormControl('', [Validators.required]),
    clientEmail: new FormControl('', [Validators.required]),
    carModel: new FormControl('', [Validators.required]),
    carNumber: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    const data = { ...this.reservationForm.value, id: Date.now() };
    this.carService.addReservation(data);
    this.reservationForm.reset();
  }
}
