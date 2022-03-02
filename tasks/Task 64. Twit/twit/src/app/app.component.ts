import { Component } from '@angular/core';
import { List } from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  text: string = '';
  arr: List[] = [];

  createPost(): void {
    const d = new Date();
    const arr: List = {
      name: this.name,
      text: this.text,
      date: `${d.getDate()}.${d.getUTCMonth() + 1}.${d.getFullYear()}`,
    }
    this.arr.push(arr);
  }

}
