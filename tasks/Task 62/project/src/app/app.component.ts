import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a:number = 0;
  b:number = 0;

getSum(): string {
  if(this.a == null || this.b == null){
    return ('Введите 2 числа');
  } else
  return `Число ${this.a} + ${this.b} равно = ${this.a + this.b}`;
} 

}
