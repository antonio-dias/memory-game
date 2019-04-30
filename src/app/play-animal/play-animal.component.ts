import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-animal',
  templateUrl: './play-animal.component.html',
  styleUrls: ['./play-animal.component.scss']
})
export class PlayAnimalComponent implements OnInit {


  indices: Array<number> = [];
  nivel: number = 4;

  constructor() { 
    this.indices = new Array();
    this.indices.push(0);
    this.indices.push(1);
    this.indices.push(0);
    this.indices.push(1);
  }

  ngOnInit() {}

}
