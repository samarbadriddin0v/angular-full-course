export interface Reservation {
  id: string;
  checkIn: Date;
  checkOut: Date;
  clientName: string;
  clientEmail: string;
  carModel: string;
  carNumber: number;
}
