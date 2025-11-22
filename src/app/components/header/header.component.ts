import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <p>
      {{title()}} world!
    </p>
  `,
  styles: ``
})
export class HeaderComponent {
  // title = 'hello'; // this is string literal
  title = signal<string>('hello'); // this is signal to interpolation
}
