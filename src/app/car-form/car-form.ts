import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-car-form',
  imports: [ReactiveFormsModule],
  templateUrl: './car-form.html',
  styleUrl: './car-form.css',
})
export class CarForm {
  reservationForm: FormGroup = new FormGroup({
    checkIn: new FormControl('', [Validators.required]),
    checkOut: new FormControl('', [Validators.required]),
    clientName: new FormControl('', [Validators.required]),
    clientEmail: new FormControl('', [Validators.required]),
    carModel: new FormControl('', [Validators.required]),
    carNumber: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log('Form submitted:', this.reservationForm.value);
  }
}
