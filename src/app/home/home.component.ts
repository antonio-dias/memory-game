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
    if (HomeComponent.PAGE_ANIMAL === theme) {
      this.router.navigate(['play-animal']);
    }else if(HomeComponent.PAGE_FRUITS === theme){
      this.router.navigate(['play-fruit']);
    }else if(HomeComponent.PAGE_FOOTBALL === theme){
      this.router.navigate(['play-football']);
    }else if(HomeComponent.PAGE_COUNTRY === theme){
      this.router.navigate(['play-country']);
    }
  }

  ngOnInit() {}

}
