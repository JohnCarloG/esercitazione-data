import { Component, Input } from '@angular/core';
import { Car, LucideAngularModule } from 'lucide-angular';
import { Product } from '../models/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail-component',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './product-detail-component.html',
  styleUrl: './product-detail-component.css',
})
export class ProductDetailComponent {
    @Input() selectedProduct: Product | null = null;
    readonly carIcon = Car;
}
