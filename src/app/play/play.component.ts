import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Card } from './card';
import { Router } from '@angular/router';


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  private card_A: Card;
  private card_B: Card;
  private updatingPlay = false;
  private eventSelectedTwoCard = new EventEmitter();
  private cards: Array<Card> = [];
  private nivel: number = 0;
  private win: boolean = false;
  @Output() eventChooseNivelEasy = new EventEmitter();


  constructor(private router: Router) { 
    this.init();
  }





  ngOnInit() {
    this.eventSelectedTwoCard.subscribe(response => {
      if (this.card_A.getIndex() === this.card_B.getIndex()) {
        this.toBlockCards();
        this.clearCardsSelectds();
      } else {
        this.toUnblockCards();
      }
      this.validatePlay();
    })

    this.eventChooseNivelEasy.subscribe(event =>{
      console.log('eventChooseNivelEasy.subscribe() ', event);  
    });
  }





  public selectCard(c: Card): void {
    if(this.updatingPlay == false){
      if (this.card_A == null) {
          this.card_A = c;
          this.card_A.setBlocked(true);
      } else if (this.card_B == null) {
          this.card_B = c;
          this.card_B.setBlocked(true);
      }
      this.validateCard();
    }
  }





  private validateCard(): void{
    if (this.selectedTwoCards()) {
        this.eventSelectedTwoCard.emit();
    }
  }





  private toBlockCards(): void{
    this.cards.forEach(c => {
      if(c.getIndex() === this.card_A.getIndex() || c.getIndex() === this.card_B.getIndex()) {
         c.setBlocked(true);
      }
    });
  }





  private toUnblockCards(): void{
    this.updatingPlay = true;
    let timer = setInterval(() => { 
      this.cards.forEach(c => {
        if(c.getIndex() === this.card_A.getIndex() || c.getIndex() === this.card_B.getIndex()) {
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
    this.card_A = null;  
    this.card_B = null;  
  }





  private selectedTwoCards(): boolean {
    return this.card_A != null && this.card_B != null;
  }





  private validatePlay(): void {
     let win = true;
     this.cards.forEach(c=> {
       if(c.isBlocked() == false){
          win = false;
          return;
       }
     })
     if(win){
       this.win = win;
     }
  }





  private init(): void {
    this.cards = new Array<Card>();
    this.cards.push(new Card(1, false));
    this.cards.push(new Card(0, false));
    this.cards.push(new Card(1, false));
    this.cards.push(new Card(0, false));
    this.win = false;
  }




  
 
  public goToHome(): void {
    this.router.navigate(['home']);    
  }




  chooseNivelEasy(): void {
    console.log('PlayComponent.chooseNivelEasy()');
  }

}