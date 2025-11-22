import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md text-black flex justify-between items-center">
     <span>My Store</span>
     <app-primary-button label="Cart" (btnClicked)="showButtonClicked()" />
    </div>
  `,
  styles: `
  // .header{
  //   background-color: grey;
  //   color:black;
  //   padding:1rem;
  // }

  `
})
export class HeaderComponent {
  // title = 'hello'; // this is string literal
  // title = signal<string>('hello'); // this is signal to interpolation

  showButtonClicked() {
    console.log('Cart button clicked in Header Component!');
  }
}
