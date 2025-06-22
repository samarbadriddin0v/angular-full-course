import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { Cart } from '../models/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CurrencyPipe,
    RouterLink,
  ],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart {
  private cartService = inject(CartService);
  private cartSignal = signal<Cart[]>([]);

  cart = this.cartSignal.asReadonly();

  totalPrice = computed(() =>
    this.cart().reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    )
  );

  constructor() {
    this.loadCart();

    effect(() => {
      console.log('Cart updated:', this.cart());
    });
  }

  private loadCart() {
    this.cartService.getCart().subscribe({
      next: (data) => this.cartSignal.set(data),
    });
  }

  private updateQuantity(id: string, quantity: number) {
    this.cartService.updateQunatity(id, quantity).subscribe({
      next: (updatedCart) =>
        this.cartSignal.update((items) =>
          items.map((item) =>
            item.id === id ? { ...item, quantity: updatedCart.quantity } : item
          )
        ),
    });
  }

  increase(cartId: string, currentQty: number) {
    this.updateQuantity(cartId, currentQty + 1);
  }

  decrease(cartId: string, currentQty: number) {
    if (currentQty > 1) {
      this.updateQuantity(cartId, currentQty - 1);
    }
  }

  remove(cartId: string) {
    this.cartService.removeFromCart(cartId).subscribe({
      next: () =>
        this.cartSignal.update((items) => items.filter((i) => i.id !== cartId)),
    });
  }

  clear() {
    this.cartSignal().forEach((cart) => {
      this.cartService.removeFromCart(cart.id).subscribe();
    });
    this.cartSignal.set([]);
  }
}
