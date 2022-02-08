import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [`h2, p {color:#333;}`]
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Петр';
}
