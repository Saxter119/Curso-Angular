import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable(
  {
    providedIn: 'root'
  })
export class OpmService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Flashy Flash',
    range: 11
  },
  {
    id: uuid(),
    name: 'Super Alloy darkshine',
    range: 8
  },
  {
    id: uuid(),
    name: 'Genos',
    range: 17
  },
  {
    id: uuid(),
    name: 'Zombieman',
    range: 9 
  }
  ]

  addCharacter(character: Character): void {

    const newCharacter = { ...character, id: uuid() }

    this.characters.push(newCharacter)
  }

  onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
