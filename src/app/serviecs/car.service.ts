import { inject, Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private reservations: Reservation[] = [];
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservations`);
  }

  getReservationById(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/reservations/${id}`);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(
      `${this.apiUrl}/reservations`,
      reservation
    );
  }

  deleteReservation(id: string): Observable<Reservation> {
    return this.http.delete<Reservation>(`${this.apiUrl}/reservations/${id}`);
  }

  updateReservation(
    id: string,
    updatedReservation: Reservation
  ): Observable<Reservation> {
    return this.http.put<Reservation>(
      `${this.apiUrl}/reservations/${id}`,
      updatedReservation
    );
  }
}
