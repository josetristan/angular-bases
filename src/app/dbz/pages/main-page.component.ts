import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.services';
import { Character } from '../interfaces/character.interface';
import { DbzModule } from '../dbz.module';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  constructor(private dbzService: DbzService){}

  get characters(): Character[]{
    // de esta forma estamos creando una instancia nueva a devolver
    // el characters del servicio va a ser distinto del que estamos utilizando
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character){
    this.dbzService.addNewCharacter(character);
  }

}
