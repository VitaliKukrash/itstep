import { Component } from '@angular/core';
import { ChildComponent} from './child.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  // styles: [`h2, p {color:red;}`]
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Tom";
}
