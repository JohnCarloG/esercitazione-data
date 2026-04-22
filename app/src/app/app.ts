import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from './models/product.interface';
import { ProductDetailComponent } from './product-detail-component/product-detail-component';
import { ProductListComponent } from './product-list-component/product-list-component';

// Componente radice: fa da "coordinatore" tra lista e dettaglio, che sono suoi fratelli.
@Component({
  selector: 'app-root',
  imports: [ProductDetailComponent, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  // Stato condiviso che viene passato ai figli tramite @Input() nel template.
  isProductFormModalOpen = false;
  selectedProduct: Product | null = null;

  // Riferimento al bottone "Aggiungi Auto" nel template (#addBtn): serve per ripristinare il focus.
  @ViewChild('addBtn') private addBtn?: ElementRef<HTMLButtonElement>;

  openProductFormModal(): void {
    this.isProductFormModalOpen = true;
  }

  closeProductFormModal(): void {
    this.isProductFormModalOpen = false;
    // setTimeout: aspetta che Angular aggiorni il DOM, poi rimette il cursore sul bottone originale.
    setTimeout(() => this.addBtn?.nativeElement.focus());
  }

  // Chiamato dall'Output productSelected di ProductListComponent quando l'utente clicca una card.
  onProductSelected(product: Product): void {
    this.selectedProduct = product;
  }
}
