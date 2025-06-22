import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TruncatePipe } from '../../../pipes/truncate-pipe';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, TruncatePipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
  standalone: true,
})
export class ProductCard {
  @Input() item!: Product;
}
