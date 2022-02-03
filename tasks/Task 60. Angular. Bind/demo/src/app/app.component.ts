import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title:string = 'My first component 2'; // интерполяция
    age:number = 25; // интерполяция
    link: string = "https://www.mts.by/local/templates/ns_mts/img/svg/logo-new.svg"; // привязка к атрибуту
    name: string = "Мое имя";
    red = "";
    name1:string='Tom'; 
    colspan:number=2;
    count: number=0;
    name2:string='Barbara';
    isRed:boolean=false;
    red1="isredbox";



    subAge():void{
        this.age--;
    }

    addAge($event: any):void{
        this.age++;
        console.log($event.target);
    }  

    addClass():void{
        this.red = "hover";
    }

    removeClass():void{
        this.red = "";
    }

    inCrease(): void{
        this.count++;
    }

    inCreaseEvent($event:any):void{
        this.count++;
        console.log($event);
    }
}
