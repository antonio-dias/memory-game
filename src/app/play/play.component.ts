import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Card } from './card';

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
  private eventSelectedTwoCard = new EventEmitter();
  @Input() nivelSelected: string;





  constructor() {
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
    this.cards = new Array<Card>();
    this.win = false;

    if (quantity === 4) {
        this.cards.push(new Card(1, false));
        this.cards.push(new Card(0, false));
        this.cards.push(new Card(1, false));
        this.cards.push(new Card(0, false));
    } else if (quantity === 8) {
        this.cards.push(new Card(1, false));
        this.cards.push(new Card(0, false));
        this.cards.push(new Card(1, false));
        this.cards.push(new Card(0, false));
        this.cards.push(new Card(1, false));
        this.cards.push(new Card(0, false));
        this.cards.push(new Card(1, false));
        this.cards.push(new Card(0, false));
    } else {
        this.cards.push(new Card(1, false));
        this.cards.push(new Card(0, false));
        this.cards.push(new Card(1, false));
        this.cards.push(new Card(0, false));
        this.cards.push(new Card(1, false));
        this.cards.push(new Card(0, false));
        this.cards.push(new Card(1, false));
        this.cards.push(new Card(0, false));
        this.cards.push(new Card(1, false));
        this.cards.push(new Card(0, false));
        this.cards.push(new Card(1, false));
        this.cards.push(new Card(0, false));
    }
  }



  @Input()
  set quantityCardsSelected(quantity: number) {
    this.createCards(quantity);
  }





  public goToHome(): void {
    //this.router.navigate(['home']);
  }

}