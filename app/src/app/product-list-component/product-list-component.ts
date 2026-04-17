import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inbox, LucideAngularModule, X } from 'lucide-angular';
import { Product } from '../models/product.interface';
import { ProductForm } from '../forms/product-form/product-form';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule, ProductForm, LucideAngularModule],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent implements OnChanges {
  @Input() isFormModalOpen = false;
  @Output() formModalClosed = new EventEmitter<void>();

  @ViewChild('modalPanel') private modalPanel!: ElementRef<HTMLElement>;
  @ViewChild('modalCloseBtn') private modalCloseBtn!: ElementRef<HTMLButtonElement>;

  readonly xIcon = X;
  readonly inboxIcon = Inbox;

  products: Product[];
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isFormModalOpen']?.currentValue === true) {
      setTimeout(() => this.modalCloseBtn?.nativeElement.focus());
    }
  }

  trapFocus(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeFormModal();
      return;
    }
    if (event.key !== 'Tab') return;

    const focusableSelectors =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(
      this.modalPanel.nativeElement.querySelectorAll<HTMLElement>(focusableSelectors)
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
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