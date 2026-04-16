import { Component, Input } from '@angular/core';
import { Product } from '../models/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail-component',
  imports: [CommonModule],
  templateUrl: './product-detail-component.html',
  styleUrl: './product-detail-component.css',
})
export class ProductDetailComponent {
    @Input() selectedProduct: Product | null = null; // Riceve il prodotto dal padre
}
