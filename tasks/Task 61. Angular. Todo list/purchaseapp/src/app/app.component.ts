import { Component } from '@angular/core';

class Item{
  purchase: string;
  done: boolean;
  price: number;
  number: number;
   
  constructor(purchase: string, price: number, number: number) {

      this.purchase = purchase;
      this.price = price;
      this.number = number;
      this.done = false;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent { 
  text: string = "";
  price: number = 0;
  number: number = 0;
   
  items: Item[] = 
  [
      { purchase: "Хлеб", done: false, price: 15.9, number: 1},
      { purchase: "Масло", done: false, price: 60, number: 1 },
      { purchase: "Картофель", done: true, price: 22.6, number: 1 },
      { purchase: "Сыр", done: false, price:310, number: 1 }
  ];
  addItem(text: string, price: number, number: number): void {
       
      if(text==null || text.trim()=="" || price==null)
          return;
      this.items.push(new Item(text, price, number));
  }

  deleteItem(): void {
    this.items = this.items.filter(item => !item.done)
    }
}