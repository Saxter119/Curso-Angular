import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

public heroNames: string[] =['Metal bat', 'Taksumaki', 'Saitama', 'Genos', 'Silver Fang'];

public lastOneDeleted? : string;

deleteLastHero(): void{
 this.lastOneDeleted = this.heroNames.pop()
}

}
