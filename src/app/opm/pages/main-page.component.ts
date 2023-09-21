import { OpmService } from './../services/opm.service';
import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-opm-main-page',
  templateUrl: 'main-page.component.html'
})
export class MainPageComponent {

  constructor(private opmService: OpmService) { }
  //esto crea una unica copia estatica del arreglo
  // characters: Character[] = [...this.opmService.characters]

  //esta crea un metodo que se ejecuta cada vez que se accede a la propiedad
  get characters(): Character[] {
    return [...this.opmService.characters];
  }

  onDeleteCharacterById(id: string): void {
    this.opmService.onDeleteCharacterById(id)
  }

  onNewCharacter(character: Character): void {
    this.opmService.addCharacter(character)
  }

}


