import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card, Cards, CardType } from 'src/app/services/cards';
import { Deck } from 'src/app/services/decks';
import { CardEditDialog } from '../card-edit-dialog/card-edit-dialog';
import { ViewCard } from '../view-card/view-card';
import { MatButtonModule } from '@angular/material/button';
import { AppModule } from 'src/app/modules';
import { CommonModule } from 'src/app/common';


@Component({
  selector: 'app-card-info',
  imports: [ViewCard, CommonModule,MatButtonModule],
  templateUrl: './card-info.html',
  styleUrl: './card-info.scss'
})
export class CardInfo {
@Input()
  cardId?: string;

  @Input()
  card?: Card;

  @Input()
  deck?: Deck;
  
  type?: CardType;
  
  preview = false;
  
  constructor(
    private cardsService: Cards, 
    public dialog: MatDialog) {
  }
  
  reload() {
    this.cardsService.getCard(this.cardId!).subscribe(response => {
      this.card = response;
      this.type = this.cardsService.getCardType(this.card!.type);
    });
  }
  ngOnInit(): void {
    if (this.cardId) {
      this.reload();
    } else {
      this.type = this.cardsService.getCardType(this.card!.type);
      
    }

  }
  
  	editCard() {
      console.info('Edit card...');
		const dialogRef = this.dialog.open(CardEditDialog, {
			  height: '1000px',
        maxWidth: '2500px',
			data: { card: this.card, deck: this.deck }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			this.reload();
		});
  }
}
