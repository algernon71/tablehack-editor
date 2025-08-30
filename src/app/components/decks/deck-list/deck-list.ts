import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Deck, DeckEntry, Decks } from 'src/app/services/decks';
import { Cards, CardType } from 'src/app/services/cards';
import { CardEditDialog } from '../../cards/card-edit-dialog/card-edit-dialog';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { ResourceReference } from '../../resources/resource-reference/resource-reference';

@Component({
  selector: 'app-deck-list',
  imports: [MatToolbarModule, MatTableModule, ResourceReference],
  templateUrl: './deck-list.html',
  styleUrl: './deck-list.scss'
})
export class DeckList {
displayedColumns: string[] = ['name', 'symbol', 'cardCount', 'actions'];
	search = '';
	decks: Deck[] = [];
	typeFilter?: string | null;
	cardType?: CardType;
	cardTypes?: CardType[];

	constructor(
		private decksService: Decks,
		public cardsService: Cards,
		private router: Router,
		private route: ActivatedRoute,
		public dialog: MatDialog) {
	}



	ngOnInit() {
		this.refreshCardType();
    this.route.paramMap.subscribe(params => {
        // console.info('Deck list, params:', params);
    });
		
		this.router.events.subscribe((res) => {
			if (res instanceof NavigationEnd) {
        // console.info('Deck list event, res:', res);
				
			}
			this.refreshCardType();
		});
	}

	searchInput(event: any) {
		this.search = event.target.value;
		this.reload();
	}


	openEditor(entry: DeckEntry) {
		this.cardsService.getCard(entry.cardId!).subscribe(card => {
			const dialogRef = this.dialog.open(CardEditDialog, {
				data: card,
			});

			dialogRef.afterClosed().subscribe(result => {
				console.log('The dialog was closed');
			});

		});

	}


	select(deck: any) {
		this.router.navigate(['edit', deck.id], { relativeTo: this.route });
	}
	addDeck() {
		this.router.navigate(['add'], { relativeTo: this.route });
	}
	cardCount(deck: Deck) {
		let sum = 0;
		deck.entries.forEach(entry => sum += entry.count);

		return sum;
	}



	refreshCardType() {
		const type = this.route.parent?.snapshot.paramMap.get("type");
		this.setCardType(type!);
		this.reload();

	}
	setCardType(typeId: string) {
		if (this.typeFilter != typeId) {
			this.typeFilter = typeId;
			this.cardType = this.cardsService.getCardType(typeId);
			this.reload();
		}

	}

	reload() {
		if (this.typeFilter) {
			this.decksService.getDecks(this.typeFilter!, false).subscribe(data => {
				this.decks = data;
			});

		}

	}
}
