import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';


@NgModule({
  declarations:[
    CounterComponent
  ],
  //Necesario para poder utilizar el componente fuera del módulo
  exports:[
    CounterComponent
  ]
})
export class CounterModule{

}
