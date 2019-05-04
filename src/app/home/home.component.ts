import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  static EASY: string = 'EASY';
  static MEDIUM: string = 'MEDIUM';
  static HARD: string = 'HARD';

  nivel: string = null;
  quantityCards: number = null;

  constructor() {}

  public chooseNivel(nivel: string): void {
    this.nivel = nivel;
    if (HomeComponent.EASY === this.nivel) {
      this.quantityCards = 4;
    } else if(HomeComponent.MEDIUM === this.nivel) {
      this.quantityCards = 8;
    } else if(HomeComponent.MEDIUM === this.nivel) {
      this.quantityCards = 12;
    }
  }

  chooseNivelEasy(): void{

  }

  ngOnInit() {}

}