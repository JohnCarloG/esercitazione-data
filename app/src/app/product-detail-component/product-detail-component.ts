import { Component, Input } from '@angular/core';
import { Car, LucideAngularModule } from 'lucide-angular';
import { Product } from '../models/product.interface';
import { CommonModule } from '@angular/common';

// Pannello laterale: mostra i dettagli dell'auto selezionata o uno stato vuoto.
@Component({
  selector: 'app-product-detail-component',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './product-detail-component.html',
  styleUrl: './product-detail-component.css',
})
export class ProductDetailComponent {
    // Input dal padre (AppComponent): null se nessuna auto è selezionata.
    @Input() selectedProduct: Product | null = null;
    readonly carIcon = Car;
}
