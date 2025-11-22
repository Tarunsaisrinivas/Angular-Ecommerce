import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="bg-gray-600 text-black">
      {{title()}} world!
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
  title = signal<string>('hello'); // this is signal to interpolation
}
