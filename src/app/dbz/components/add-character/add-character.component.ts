import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //Emisor de eventos para poder conectar el character con otro componente
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:'',
    power:0
  }

  @Input()
  public indexCharacterRemoved: number;

  emitCharacter(){
    console.log(this.character);

    //debugger;

    if (this.character.name.length===0)return;

    this.onNewCharacter.emit(this.character);

    //this.character.name=""
    //this.character.power=0
    this.character = {name:'', power:0};

  }

  onDele


}
