import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
   <button (click)="btnClicked.emit()">{{ label() }}</button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label= input('');
  btnClicked = output();
  // handleButtonClick() {
  //   this.btnClicked.emit();
  // } // method1
}
