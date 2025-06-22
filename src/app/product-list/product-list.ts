import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductCard } from '../components/card/product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [MatGridListModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  standalone: true,
})
export class ProductList {
  productService = inject(ProductService);

  productList = toSignal(this.productService.getProducts(), {
    initialValue: [],
  });
}
