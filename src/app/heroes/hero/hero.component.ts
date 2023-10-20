import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'Ironman';
  public age: number = 45;
//Forma de declarar un getter para poder ser usado desde html
    get capitalizedName():string{
      return this.name.toUpperCase();
    }

    getHeroDescription():string{
      return `${this.name} - ${this.age}`
    }


    changeHero():void{
      this.name="Spiderman";
    }

    changeAge():void{
      this.age=54;
    }

    resetForm(): void{
      this.name= 'Ironman';
      this.age=45;

    }

}
