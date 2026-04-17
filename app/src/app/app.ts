import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { ProductDetailComponent } from './product-detail-component/product-detail-component';
import { ProductListComponent } from './product-list-component/product-list-component';

@Component({
  selector: 'app-root',
  imports: [ProductDetailComponent, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
  isProductFormModalOpen = false;

  @ViewChild('addBtn') private addBtn!: ElementRef<HTMLButtonElement>;

  openProductFormModal(): void {
    this.isProductFormModalOpen = true;
  }

  closeProductFormModal(): void {
    this.isProductFormModalOpen = false;
    setTimeout(() => this.addBtn?.nativeElement.focus());
  }
}
