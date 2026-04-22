import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../models/product.interface';

// Form di aggiunta auto (template-driven). Riempie productDraft via [(ngModel)] ed emette al padre.
@Component({
  selector: 'app-product-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  // Output: il nuovo prodotto viene consegnato al padre (ProductListComponent).
  @Output() productCreated = new EventEmitter<Product>();

  readonly currentYear = new Date().getFullYear();

  // Bozza collegata ai campi del form tramite two-way binding [(ngModel)].
  productDraft: Product = {
    name: '',
    price: 0,
    description: '',
    brand: '',
    imageUrl: '',
    fuelType: '',
    year: this.currentYear,
    horsepower: 0,
  };

  onSubmit(form: NgForm): void {
    // Se ci sono campi invalidi, li segnala come "toccati" così appaiono i messaggi d'errore.
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    // Emette una COPIA della bozza (spread {...}): così il reset successivo non altera l'oggetto già aggiunto al catalogo.
    this.productCreated.emit({ ...this.productDraft });
    this.resetForm(form);
  }

  // Riporta la bozza e lo stato del form ai valori iniziali.
  private resetForm(form: NgForm): void {
    this.productDraft = {
      name: '',
      price: 0,
      description: '',
      brand: '',
      imageUrl: '',
      fuelType: '',
      year: this.currentYear,
      horsepower: 0,
    };
    form.resetForm(this.productDraft);
  }
}
