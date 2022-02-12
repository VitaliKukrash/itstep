import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<ng-content></ng-content>
    <button (click)="change()">Изменить</button>`
})
export class ChildComponent{
     
    @ContentChild("headerContent", {static:false})
    header: ElementRef|undefined;
      
    change() { 
        if(this.header !==undefined){
            console.log(this.header); 
            this.header.nativeElement.textContent = "Hello to world!"; 
        }
    }
}
