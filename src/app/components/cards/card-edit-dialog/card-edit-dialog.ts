import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialog } from 'src/app/common/confirm-dialog/confirm-dialog';
import { Card, Cards, CardType } from 'src/app/services/cards';
import { Deck, DeckEntry } from 'src/app/services/decks';
import { CardFieldEdit } from '../card-field-edit/card-field-edit';
import { ViewCard } from '../view-card/view-card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

export class EditData {
	deck?: Deck;
	entry!: DeckEntry;
	card!: Card;
}
@Component({
  selector: 'app-card-edit-dialog',
  imports: [CardFieldEdit, ViewCard, FormsModule, MatButtonModule],
  templateUrl: './card-edit-dialog.html',
  styleUrl: './card-edit-dialog.scss'
})
export class CardEditDialog {
	cardType?: CardType;

	constructor(
		public dialogRef: MatDialogRef<CardEditDialog>,
		@Inject(MAT_DIALOG_DATA) public data: EditData,
		private cardsService: Cards,
		public dialog: MatDialog,
	) {

	}

	onNoClick(): void {
		this.dialogRef.close();
	}

	ngOnInit() {
		console.info('card edit dialog init, card:', this.data.card);
		this.cardType = this.cardsService.getCardType(this.data.card.type);
		console.info('card edit dialog init, card type:', this.cardType);
		if (!this.data.card.id) {
			this.newCard(this.data.card!.type);
		}
	}

	cancel() {
		this.dialogRef.close();
	}
	deleteCard() {
		const dialogRef = this.dialog.open(ConfirmDialog, {
			data: { title: 'Ta bort kort?', text: 'Är du säker på att du vill ta bort detta kort?' }
		});

		dialogRef.afterClosed().subscribe(confirm => {
			if (confirm) {
				this.cardsService.deleteCard(this.data.card!).subscribe(response => {
					this.dialogRef.close(response);

					// this.location.back();
				});

			}
		});
	}

	saveCard() {
		console.info('saveCard:', this.data.card);
		this.cardsService.saveCard(this.data.card!).subscribe(response => {
			this.dialogRef.close(response);

			// this.location.back();
		});

	}
	addCard() {
		this.cardsService.addCard(this.data.card!).subscribe(response => {
			this.dialogRef.close(response);
		});

	}

	newCard(type: string) {
		console.info('newCard:', type);
		this.cardType = this.cardsService.getCardType(type);
		this.data.card = { name: '', type: type, horizontal: false, description: '', data: {} };
	}
}
