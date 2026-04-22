import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inbox, LucideAngularModule, X } from 'lucide-angular';
import { Product } from '../models/product.interface';
import { PRODUCTS } from '../data/products.data';
import { ProductForm } from '../forms/product-form/product-form';

// Componente della griglia: mostra le card, gestisce il modale e le mutazioni del catalogo.
@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule, ProductForm, LucideAngularModule],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent implements OnChanges {
  // Input: valore ricevuto da AppComponent per sapere se il modale deve essere visibile.
  @Input() isFormModalOpen = false;

  // Output: segnali emessi verso il padre (AppComponent).
  @Output() formModalClosed = new EventEmitter<void>();
  @Output() productSelected = new EventEmitter<Product>();

  // Riferimenti agli elementi del template, serve per gestire il focus nel modale.
  @ViewChild('modalPanel') private modalPanel?: ElementRef<HTMLElement>;
  @ViewChild('modalCloseBtn') private modalCloseBtn?: ElementRef<HTMLButtonElement>;

  // Immagine di fallback usata se l'URL originale non è raggiungibile.
  private readonly fallbackImage = 'no-image.svg';
  readonly xIcon = X;
  readonly inboxIcon = Inbox;

  // Copia dell'array seed (spread): le mutazioni non toccheranno mai l'originale.
  products: Product[] = [...PRODUCTS];
  selectedProduct: Product | null = null;

  // Lifecycle hook: scatta a ogni cambio di @Input. Quando il modale si apre, porta il focus sul bottone di chiusura.
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isFormModalOpen']?.currentValue === true) {
      setTimeout(() => this.modalCloseBtn?.nativeElement.focus());
    }
  }

  // Focus trap: impedisce al cursore della tastiera di uscire dal modale mentre è aperto.
  trapFocus(event: KeyboardEvent): void {
    // Esc chiude il modale — scorciatoia standard nei dialoghi.
    if (event.key === 'Escape') {
      this.closeFormModal();
      return;
    }
    if (event.key !== 'Tab') return;

    const panel = this.modalPanel?.nativeElement;
    if (!panel) return;

    // Raccoglie tutti gli elementi su cui può andare il focus dentro al modale.
    const focusableSelectors =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(
      panel.querySelectorAll<HTMLElement>(focusableSelectors)
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    // Shift+Tab sul primo elemento → salta all'ultimo (e viceversa): il focus resta "in trappola".
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  onProductClick(product: Product): void {
    this.selectedProduct = product;         // stato locale per evidenziare la card cliccata
    this.productSelected.emit(product);     // notifica al padre la selezione
  }

  // Aggiunge un prodotto creando un NUOVO array (immutabilità): Angular rileva così il cambiamento.
  addProduct(newProduct: Product): void {
    this.products = [...this.products, newProduct];
    this.closeFormModal();
  }

  deleteProduct(index: number): void {
    const removed = this.products[index] ?? null;
    this.products = this.products.filter((_, i) => i !== index);
    // Se stavamo mostrando il prodotto appena eliminato, azzeriamo la selezione.
    if (this.selectedProduct === removed) {
      this.selectedProduct = null;
    }
  }

  // Funzione di tracciamento per *ngFor: evita di ri-renderizzare tutte le card a ogni modifica.
  trackByIndex(index: number): number {
    return index;
  }

  closeFormModal(): void {
    this.formModalClosed.emit();
  }

  // Fallback: se l'immagine non si carica, la sostituisce con un placeholder (con guard anti-loop).
  onImageError(event: Event): void {
    const img = event.currentTarget as HTMLImageElement | null;
    if (!img || img.getAttribute('src') === this.fallbackImage) return;
    img.src = this.fallbackImage;
  }
}