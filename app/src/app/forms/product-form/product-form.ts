import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  @Output() productCreated = new EventEmitter<Product>();

  productDraft: Product = {
    name: '',
    price: 0,
    description: '',
    brand: '',
    imageUrl: '',
    fuelType: '',
    year: new Date().getFullYear(),
    horsepower: 0,
  };

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.productCreated.emit({ ...this.productDraft });
    this.resetForm(form);
  }

  private resetForm(form: NgForm): void {
    this.productDraft = {
      name: '',
      price: 0,
      description: '',
      brand: '',
      imageUrl: '',
      fuelType: '',
      year: new Date().getFullYear(),
      horsepower: 0,
    };
    form.resetForm(this.productDraft);
  }
}
