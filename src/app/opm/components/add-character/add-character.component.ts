import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { range } from 'rxjs';

@Component({
  selector: 'app-opm-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter;

  public character: Character = {
    name: '',
    range: 0
  }

  emitCharacter(): void {

    if(this.character.name === "") return

    this.onNewCharacter.emit(this.character)

    this.character = {name: '', range:0}
  }
}
