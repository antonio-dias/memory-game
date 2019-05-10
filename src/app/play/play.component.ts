import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Card } from './card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  private cardA: Card;
  private cardB: Card;
  private win: boolean;
  private updatingPlay: boolean;
  private cards: Array<Card> = [];
  private flagsPossible: Array<number> = [];
  private eventSelectedTwoCard = new EventEmitter();
  @Input() nivelSelected: string;
  @Input() isMobile: boolean;
  @Input() isTablet: boolean;
  @Input() isDesktop: boolean;





  constructor(private router: Router) {
    this.cards = new Array<Card>();
  }





  ngOnInit() {
    this.eventSelectedTwoCard.subscribe(response => {
      if (this.cardA.getIndex() === this.cardB.getIndex()) {
        this.toBlockCards();
        this.clearCardsSelectds();
      } else {
        this.toUnblockCards();
      }
      this.validatePlay();
    });
  }





  public selectCard(c: Card): void {
    if (this.updatingPlay === undefined || this.updatingPlay === false) {
      if (this.cardA == null) {
          this.cardA = c;
          this.cardA.setBlocked(true);
      } else if (this.cardB == null) {
          this.cardB = c;
          this.cardB.setBlocked(true);
      }
      this.validateCard();
    }
  }





  private validateCard(): void {
    if (this.selectedTwoCards()) {
        this.eventSelectedTwoCard.emit();
    }
  }





  private toBlockCards(): void {
    this.cards.forEach(c => {
      if (c.getIndex() === this.cardA.getIndex() || c.getIndex() === this.cardB.getIndex()) {
         c.setBlocked(true);
      }
    });
  }





  private toUnblockCards(): void {
    this.updatingPlay = true;
    const timer = setInterval(() => {
      this.cards.forEach(c => {
        if (c.getIndex() === this.cardA.getIndex() || c.getIndex() === this.cardB.getIndex()) {
          c.setBlocked(false);
        }
      });
      this.clearCardsSelectds();
      clearInterval(timer);
      this.updatingPlay = false;
    }
    , 500);
  }





  private clearCardsSelectds(): void {
    this.cardA = null;
    this.cardB = null;
  }





  private selectedTwoCards(): boolean {
    return this.cardA != null && this.cardB != null;
  }





  private validatePlay(): void {
     let win = true;
     this.cards.forEach(card => {
       if (card.isBlocked() === false) {
          win = false;
          return;
       }
     });
     if (win) {
       this.win = win;
     }
  }





  public createCards(quantity: number): void {
    this.win = false;
    this.cards = new Array<Card>();
    this.flagsPossible = new Array<number>();

    do {
      const numberSorted = Math.floor(Math.random() * 10);
      const exist = this.flagsPossible.includes(numberSorted); //TODO:REVIEW
      if (numberSorted > 0 && exist === false) {
        this.flagsPossible.push(numberSorted);
      }
    } while (this.flagsPossible.length < (quantity / 2));

    let cont = 1;

    while (cont < 3) {
      this.flagsPossible.forEach(numberSorted => {
        this.cards.push(new Card(numberSorted, false));
      });
      cont ++;
    }

  }





  @Input()
  set quantityCardsSelected(quantity: number) {
    this.win = undefined;
    this.cards = undefined;
    this.flagsPossible = undefined;
    this.createCards(quantity);
  }





  public goToHome(): void {
    //this.router.navigate(['home']);
  }

}