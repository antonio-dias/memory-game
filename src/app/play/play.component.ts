import { Component, OnInit } from '@angular/core';
import { faBaseballBall } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {


  indices: Array<number> = [];
  nivel: number = 4;
  faBaseballBall = faBaseballBall;

  constructor() { 
    this.indices = new Array();
    this.indices.push(1);
    this.indices.push(0);
    this.indices.push(0);
    this.indices.push(1);
  }

  ngOnInit() {}

}
