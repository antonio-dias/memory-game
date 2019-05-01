import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  static PAGE_ANIMAL: string = "Animals";
  static PAGE_FRUITS: string = "Fruits";
  static PAGE_FOOTBALL: string = "Football";
  static PAGE_COUNTRY: string = "Country";

  constructor(private router: Router) {}

  public chooseTheme(theme: string): void {
    
      this.router.navigate(['play']);
    
  }

  ngOnInit() {}

}
