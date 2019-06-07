import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PlayService } from '../play.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private static EASY = 'EASY';
  private static HARD = 'HARD';
  private static MEDIUM = 'MEDIUM';
  private mobileMaxSizeWidth = 425;
  private tabletMaxSizeWidth = 768;
  isMobile = false;
  isTablet = false;
  isDesktop = false;
  nivel: string = null;
  quantityCards: number = null;





  constructor(private router: Router, private playService: PlayService) {
    this.loadScreenSize();
  }




  ngOnInit() {
    this.playService.currentQuantity.subscribe(q => this.quantityCards = q);
  }





  public chooseNivel(nivel: string): void {
    this.nivel = nivel;
    if (HomeComponent.EASY === this.nivel) {
      this.quantityCards = 4;
    } else if (HomeComponent.MEDIUM === this.nivel) {
      this.quantityCards = 8;
    } else if (HomeComponent.HARD === this.nivel) {
      this.quantityCards = 12;
    }
    this.playService.changeQuantityCards(this.quantityCards);
  }





  @HostListener('window:resize')
  loadScreenSize() {
    const scrWidth = window.innerWidth;
    if (scrWidth <= this.mobileMaxSizeWidth) {
        this.isMobile = true;
        this.isTablet = false;
        this.isDesktop = false;
    } else if (scrWidth <= this.tabletMaxSizeWidth) {
        this.isMobile = false;
        this.isTablet = true;
        this.isDesktop = false;
    } else {
        this.isMobile = false;
        this.isTablet = false;
        this.isDesktop = true;
    }
  }


}
