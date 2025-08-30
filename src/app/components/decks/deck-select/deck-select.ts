import { Component, Input, model, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, mergeMap, startWith } from 'rxjs/operators';
import { Deck, Decks } from 'src/app/services/decks';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-deck-select',
  imports: [],
  templateUrl: './deck-select.html',
  styleUrl: './deck-select.scss'
})
export class DeckSelect {
	pathCtrl = new FormControl('');

	@Input()
	name = 'Kortlek';

	@Input()
	type?: string;
	@Input()
	subType?: string;
  
	deckReference = model<string>("");

	selected?: Deck;

	decks?: Observable<Deck[]>;

	constructor(
		private decksService: Decks,
		public dialog: MatDialog) {

	}

	ngOnInit() {
    // this.deckReference.update()
		this.pathCtrl.setValue(this.deckReference());
		this.decks = this.pathCtrl.valueChanges.pipe(
			startWith(''), mergeMap(value => this.decksService.getDecks(this.type!, true)));
	}

	deckSelected(event: any, deck: Deck) {
		if (event.isUserInput) {
			this.selected = deck;
			this.deckReference.set(deck!.reference!);
		}
	}
}
