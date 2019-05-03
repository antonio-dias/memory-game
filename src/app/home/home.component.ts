import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nivel: string = '';
  constructor(private router: Router) {}

  public chooseNivel(nivel: string): void {
      this.nivel = nivel;
      this.router.navigate(['play']);
  }

  ngOnInit() {}

}