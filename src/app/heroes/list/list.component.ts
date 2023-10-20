import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  public deletedHero?: string; //? indicamos que es opcional

  deleteHero():void{
    this.deletedHero = this.heroNames.pop();
  }


}
