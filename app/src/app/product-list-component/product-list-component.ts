import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inbox, LucideAngularModule, X } from 'lucide-angular';
import { Product } from '../models/product.interface';
import { PRODUCTS } from '../data/products.data';
import { ProductForm } from '../forms/product-form/product-form';

@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule, ProductForm, LucideAngularModule],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent implements OnChanges {
  @Input() isFormModalOpen = false;
  @Output() formModalClosed = new EventEmitter<void>();
  @Output() productSelected = new EventEmitter<Product>();

  @ViewChild('modalPanel') private modalPanel?: ElementRef<HTMLElement>;
  @ViewChild('modalCloseBtn') private modalCloseBtn?: ElementRef<HTMLButtonElement>;

  private readonly fallbackImage = 'no-image.svg';
  readonly xIcon = X;
  readonly inboxIcon = Inbox;

  products: Product[] = [...PRODUCTS];
  selectedProduct: Product | null = null;

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

    const panel = this.modalPanel?.nativeElement;
    if (!panel) return;

    const focusableSelectors =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(
      panel.querySelectorAll<HTMLElement>(focusableSelectors)
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
    this.productSelected.emit(product);
  }

  addProduct(newProduct: Product): void {
    this.products = [...this.products, newProduct];
    this.closeFormModal();
  }

  deleteProduct(index: number): void {
    const removed = this.products[index] ?? null;
    this.products = this.products.filter((_, i) => i !== index);
    if (this.selectedProduct === removed) {
      this.selectedProduct = null;
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  closeFormModal(): void {
    this.formModalClosed.emit();
  }

  onImageError(event: Event): void {
    const img = event.currentTarget as HTMLImageElement | null;
    if (!img || img.getAttribute('src') === this.fallbackImage) return;
    img.src = this.fallbackImage;
  }
}