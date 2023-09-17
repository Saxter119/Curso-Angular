import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name: string = 'batman'
public age: number = 33

get nameCapitalized() : string {
return this.name.toUpperCase();
}

get getHeroDescription(): string{
  return `${this.name} - ${this.age}`
}

changeName(): void{
  this.name = 'Hombre murcielago'
}

changeAge(): void{
  this.age = 35
}

resetValues(){
  this.name = 'batman'
  this.age = 33

  // document.querySelectorAll('h1').forEach(element=> element.innerText = 'Hi from hero.component')
}

}

