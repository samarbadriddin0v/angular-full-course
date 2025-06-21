import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productService = inject(ProductService);

  productList = toSignal(this.productService.getProducts(), {
    initialValue: [],
  });
}
