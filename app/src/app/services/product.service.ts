import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { PRODUCTS } from '../data/products.data';

const STORAGE_KEY = 'auto_galleria_products';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = this.loadFromStorage();

  private loadFromStorage(): Product[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [...PRODUCTS];
    try {
      const parsed = JSON.parse(raw) as Product[];
      const isValid = parsed.every(p => p.imageUrl && p.brand && p.fuelType);
      if (!isValid) {
        localStorage.removeItem(STORAGE_KEY);
        return [...PRODUCTS];
      }
      return parsed;
    } catch {
      return [...PRODUCTS];
    }
  }

  private saveToStorage(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.products));
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products = [...this.products, product];
    this.saveToStorage();
  }

  deleteProduct(index: number): Product | null {
    const removed = this.products[index] ?? null;
    this.products = this.products.filter((_, i) => i !== index);
    this.saveToStorage();
    return removed;
  }
}
