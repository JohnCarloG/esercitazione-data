import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from './models/product.interface';
import { ProductDetailComponent } from './product-detail-component/product-detail-component';
import { ProductListComponent } from './product-list-component/product-list-component';

@Component({
  selector: 'app-root',
  imports: [ProductDetailComponent, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  isProductFormModalOpen = false;
  selectedProduct: Product | null = null;

  @ViewChild('addBtn') private addBtn?: ElementRef<HTMLButtonElement>;

  openProductFormModal(): void {
    this.isProductFormModalOpen = true;
  }

  closeProductFormModal(): void {
    this.isProductFormModalOpen = false;
    setTimeout(() => this.addBtn?.nativeElement.focus());
  }

  onProductSelected(product: Product): void {
    this.selectedProduct = product;
  }
}
