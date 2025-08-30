import { Component, Input, OnInit } from '@angular/core';
import { Card, Cards, CardType } from 'src/app/services/cards';
import { Deck } from 'src/app/services/decks';
import { ViewCardEntry } from './view-card-entry/view-card-entry';

@Component({
  selector: 'app-view-card',
  imports: [ViewCardEntry],
  templateUrl: './view-card.html',
  styleUrl: './view-card.scss'
})
export class ViewCard {
@Input()
  print = true;
  
  @Input()
  front = true;
  
  @Input()
  back = true;
  
  @Input()
  cardId?: string;

  @Input()
  deck?: Deck;
  
  @Input()
  card?: Card;

  type?: CardType;
  
  constructor(private cardsService: Cards) {
  }

  reload() {
    if (!this.card) {
      this.cardsService.getCard(this.cardId!).subscribe(response => {
        this.card = response;
        this.type = this.cardsService.getCardType(this.card!.type);
      });
      
    }
  }
  ngOnInit(): void {
    if (this.cardId) {
      this.reload();
    } else {
      this.type = this.cardsService.getCardType(this.card!.type);
      
    }
  }
}
