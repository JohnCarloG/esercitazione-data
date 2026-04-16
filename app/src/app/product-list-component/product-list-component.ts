import { Component } from '@angular/core';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-product-list-component',
  imports: [],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  products: Product[]; // Array di oggetti Product, non di stringhe

  constructor() {
    this.products = [
      { name: 'Alfa Romeo Giulia', price: 35000, description: 'Berlina sportiva' },
      { name: 'Fiat 500', price: 15000, description: 'City car compatta' },
      { name: 'Lamborghini Huracán', price: 200000, description: 'Supercar esclusiva' },
      { name: 'Ferrari F8 Tributo', price: 280000, description: 'Gran turismo sportiva' },
      { name: 'Audi A4', price: 45000, description: 'Berlina premium' }
    ];
  }
}
