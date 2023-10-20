import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Primera app';  //Nos da acceso a propiedades del DOM
  public title: string = 'Es igual a lo anterior' //angular nos injecta ciertas variables que podemos usar directamente en el comopnent.html
  public counter: number = 10; //esta variable la creamos y la inyectamos en el html. La anterior podemos usarla
        //en el html pero siempre completa el title del head

        increaseBy(value:number):void{
          this.counter+=value;
        }

        resetCounter():void{
          this.counter=10;
        }


}
