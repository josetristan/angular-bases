import { Component, Input, EventEmitter, Output } from '@angular/core';
import {Character} from '../../interfaces/character.interface'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  @Output()
  public onDeleteCharacterEvent: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[]=[{
    name:'Trunk',
    power: 10
  }];


  onDeleteCharacter(id:string):void{
    console.log(id);
    if (!id) return;
    this.onDeleteCharacterEvent.emit(id)
  }

}
