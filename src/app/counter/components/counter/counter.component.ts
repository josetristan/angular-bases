import { Component } from '@angular/core';

@Component({
  //Nombre que usaremos en el app.module
  selector: 'app-counter',
  template: `

  <h3 h3>counter {{counter}}</h3>


    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    `
})
export class CounterComponent{
  constructor(){}

  public counter: number = 10; //esta variable la creamos y la inyectamos en el html. La anterior podemos usarla
        //en el html pero siempre completa el title del head

        increaseBy(value:number):void{
          this.counter+=value;
        }

        resetCounter():void{
          this.counter=10;
        }

}
