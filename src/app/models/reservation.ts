export interface Reservation {
  id: number;
  checkIn: Date;
  checkOut: Date;
  clientName: string;
  clientEmail: string;
  carModel: string;
  carNumber: number;
}
