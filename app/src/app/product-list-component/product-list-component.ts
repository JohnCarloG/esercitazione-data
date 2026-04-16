import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.interface';
import { ProductForm } from '../forms/product-form/product-form';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule, ProductForm],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  @Input() isFormModalOpen = false;
  @Output() formModalClosed = new EventEmitter<void>();

  products: Product[];
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  onProductClick(product: Product): void {
    this.selectedProduct = product;
  }

  addProduct(newProduct: Product): void {
    this.productService.addProduct(newProduct);
    this.products = this.productService.getProducts();
    this.closeFormModal();
  }

  deleteProduct(index: number): void {
    const removed = this.productService.deleteProduct(index);
    this.products = this.productService.getProducts();

    if (this.selectedProduct === removed) {
      this.selectedProduct = null;
    }
  }

  closeFormModal(): void {
    this.formModalClosed.emit();
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'no-image.svg';
  }
}