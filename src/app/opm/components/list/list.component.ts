import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-opm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characters: Character[] = [{
    name: 'Zombieman',
    range: 9
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter;

  onDeleteCharacterId(id: string): void {
    this.onDelete.emit(id)
  }

}
