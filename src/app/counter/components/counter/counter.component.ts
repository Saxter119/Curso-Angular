import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  //definirlo en el template lo carga al dom html, el templateUrl llama a las hojas html y css del componente
  template: `

<h3>Counter:{{counter}}</h3>

<button (click)='increaseBy(1)'>+1</button>
<button (click)="decreaseBy(1)">-1</button>
<button (click)="multiplyBy(2)">x2</button>
<button (click)="resetCounter(counter)">reset</button>
  `
})

export class CounterComponent {
  public counter : number = 1;

  increaseBy(value: number): void{
    this.counter += value;
  }

  decreaseBy(value: number): void{
    this.counter -= value;
  }

  multiplyBy(value: number): void{
    this.counter *= value;
  }

  resetCounter(value: number){
   this.counter = 1;
  }

}
