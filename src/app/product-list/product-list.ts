import { Component, computed, inject, signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductCard } from '../components/card/product-card/product-card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-list',
  imports: [
    MatGridListModule,
    ProductCard,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  standalone: true,
})
export class ProductList {
  productService = inject(ProductService);
  search = signal('');

  productList = toSignal(this.productService.getProducts(), {
    initialValue: [],
  });

  filteredProducts = computed(() => {
    const q = this.search().toLowerCase();
    return this.productList().filter(
      (product) =>
        product.title.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q)
    );
  });

  categories = computed(() =>
    Array.from(new Set(this.productList().map((p) => p.category)))
  );
}
