import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  static EASY = 'EASY';
  static HARD = 'HARD';
  static MEDIUM = 'MEDIUM';

  nivel: string = null;
  quantityCards: number = null;

  constructor() {}

  public chooseNivel(nivel: string): void {
    this.nivel = nivel;
    if (HomeComponent.EASY === this.nivel) {
      this.quantityCards = 4;
    } else if (HomeComponent.MEDIUM === this.nivel) {
      this.quantityCards = 8;
    } else if (HomeComponent.HARD === this.nivel) {
      this.quantityCards = 12;
    }
  }

  ngOnInit() {}

}
