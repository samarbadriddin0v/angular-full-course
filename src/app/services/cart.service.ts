import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, mergeMap, Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.apiUrl}/cart`);
  }

  addToCart(cart: Omit<Cart, 'id'>, productId: string): Observable<boolean> {
    return this.getCart().pipe(
      mergeMap((carts) => {
        const existCart = carts.find((item) => item.product.id == productId);

        if (!existCart) {
          return this.addCart(cart).pipe(map(() => true));
        } else {
          return this.updateQunatity(existCart.id, existCart.quantity + 1).pipe(
            map(() => false)
          );
        }
      })
    );
  }

  addCart(cart: Omit<Cart, 'id'>): Observable<Cart> {
    return this.http.post<Cart>(`${this.apiUrl}/cart`, cart);
  }

  removeFromCart(cartId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cart/${cartId}`);
  }

  updateQunatity(cartId: string, quantity: number): Observable<Cart> {
    return this.http.patch<Cart>(`${this.apiUrl}/cart/${cartId}`, { quantity });
  }
}
