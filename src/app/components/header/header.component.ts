import { CartService } from './../../services/cart.service';
import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div
      class="bg-slate-100 px-4 py-3 shadow-md text-black flex justify-between items-center"
    >
      <button routerLink="/">
        <p class="text-3xl font-bold">My Store</p>
      </button>

      <app-primary-button
        [label]="'Cart(' + CartService.cart().length + ')'"
        routerLink="/cart"
      />
    </div>
  `,
  styles: `
  // .header{
  //   background-color: grey;
  //   color:black;
  //   padding:1rem;
  // }

  `,
})
export class HeaderComponent {
  // title = 'hello'; // this is string literal
  // title = signal<string>('hello'); // this is signal to interpolation

  // showButtonClicked() {
  //   console.log('Cart button clicked in Header Component!');
  // }

  CartService = inject(CartService);
}
