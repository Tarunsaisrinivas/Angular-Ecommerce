import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex flex-col relative">



      <img
        [src]="product().image"
        alt="{{ product().title }}"
        class="w-full h-48 object-contain mb-4"
      />

      <div class="flex flex-col mt-2">
        <span class="text-md font-bold">{{ product().title }}</span>
        <span class="text-sm">₹{{ product().price }}</span>

        <app-primary-button label="Add to cart" />
      </div>
  <span class="absolute top-2 right-3 text-sm font-bold" [class]="product().stock ? 'text-green-500' : 'text-red-500'">
        @if (product().stock) {
          {{ product().stock }} left
        } @else {
          Out of Stock
        }
      </span>
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  product = input.required<Product>();
}
