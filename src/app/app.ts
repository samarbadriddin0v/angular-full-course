import { CurrencyPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [CurrencyPipe],
})
export class App {
  price = signal(100); // Tax - Total Price

  tax = computed(() => this.price() * 0.2);
  totalPrice = computed(() => this.price() + this.tax());

  applyDiscount() {
    const discount = this.price() * 0.1; // 10$ discount
    this.price.set(this.price() - discount);
  }
}
