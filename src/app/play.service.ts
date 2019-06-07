import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayService {


  private quantityBehaviorSubject = new BehaviorSubject(null);
  currentQuantity = this.quantityBehaviorSubject.asObservable();

  constructor() {}

  changeQuantityCards(q: number) {
    this.quantityBehaviorSubject.next(q);
  }

}
