import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { of, map } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Deck, DeckEntry, Decks } from 'src/app/services/decks';
import { Card, Cards, CardType } from 'src/app/services/cards';
import { CardEditDialog } from '../../cards/card-edit-dialog/card-edit-dialog';
import { ConfirmDialog } from 'src/app/common/confirm-dialog/confirm-dialog';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResourceSelect } from '../../resources/resource-select/resource-select';
import { ViewCard } from '../../cards/view-card/view-card';
import { CardInfo } from '../../cards/card-info/card-info';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-deck',
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatTableModule, ResourceSelect, FormsModule, ReactiveFormsModule, ViewCard, CardInfo, MatInputModule],
  templateUrl: './edit-deck.html',
  styleUrl: './edit-deck.scss'
})
export class EditDeck {
	cardSearchControl = new FormControl('');
	typeId?: string | null;
	fetchedCard$!: Observable<any>;

	@Input()
	deck?: Deck;
	
	type?: CardType;

	@Output()
	updated = new EventEmitter<any>();
	@Output()
	deleted = new EventEmitter<any>();
	@Output()
	added = new EventEmitter<any>();
	@Output()
	cancelled = new EventEmitter<any>();
	displayedColumns: string[] = ['name', 'cardCount', 'actions'];


	inlineForm?: FormGroup;
	inlineIdx?: number;

	@ViewChild(MatTable) table?: MatTable<DeckEntry>;

	constructor(
		private decksService: Decks,
		private cardsService: Cards,
		private router: Router,
		private route: ActivatedRoute,
		public dialog: MatDialog,
		private location: Location) {
	}

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			const id = params.get('id');
			this.typeId = this.route.parent?.snapshot.paramMap.get("type");
			if (id && id != 'add') {
				this.decksService.getDeck(id).subscribe(response => this.setDeck(response));
			} else {
        this.type = this.cardsService.getCardType(this.typeId!);
				this.newDeck(this.typeId!);
			}
		});
	}

	setDeck(deck: Deck) {
		this.deck = deck;
		this.type = this.cardsService.getCardType(this.deck.type!);
		this.displayedColumns = ['name', 'cardCount'];
		
		this.type?.columns!.forEach(column => {
			this.displayedColumns.push(column.id);
		});
		this.displayedColumns.push('actions');
		this.deck.entries.forEach(entry => {
			this.cardsService.getCard(entry.cardId!).subscribe(card => {
				entry.card = card;
			});
		});
		
	}
	inlineEdit(idx: number, entry: DeckEntry) {
		if (this.inlineIdx === idx) {
			return;
		}
		this.inlineIdx = idx;
		this.inlineForm = new FormGroup({
			'card': new FormControl(entry.cardId),
			'count': new FormControl(entry.count)
		});

		this.inlineForm.statusChanges
			.pipe(
				filter((status) => status === 'VALID'),
			)
			.subscribe((changes) => console.log(changes));
	}

	editCard(entry: DeckEntry) {
		this.cardsService.getCard(entry.cardId!).subscribe(card => {
			console.info('Edit card:', card);
			const dialogRef = this.dialog.open(CardEditDialog, {
				data: {card: card, deck: this.deck, entry: entry }
			});

			dialogRef.afterClosed().subscribe(result => {
				console.log('The dialog was closed');
				this.decksService.getDeck(this.deck!.id!).subscribe(response => this.deck = response);

			});

		});

	}


	addCard() {
		const entry: DeckEntry = {
			count: 1
		};

		let card: Card = {
			name: '',
			type: this.typeId!,
			horizontal: false, 
			description: '',
			data: { 
				mstats: {}
			}
		};
		const dialogRef = this.dialog.open(CardEditDialog, {
			data: {card: card, deck: this.deck }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('Adding entry:', result);
			entry.cardId = result.id;
			this.deck!.entries.push(entry);
			this.table!.renderRows();
			this.saveDeck();

		});

	}
	cancel() {
		this.cancelled.emit(this.deck);
		this.location.back();
	}
	deleteDeck() {
		const dialogRef = this.dialog.open(ConfirmDialog, {
			data: { title: 'Ta bort kortlet?', text: 'Är du säker på att du vill ta bort denna kortlek?' }
		});

		dialogRef.afterClosed().subscribe(confirm => {
			if (confirm) {
				this.decksService.deleteDeck(this.deck!).subscribe(response => {
					this.deleted.emit(this.deck);
					this.location.back();
				});

			}
		});
	}

	saveDeck() {
		this.decksService.saveDeck(this.deck!).subscribe(response => {
		});

	}
	addDeck() {
		this.decksService.addDeck(this.deck!).subscribe(response => {
			this.added.emit(this.deck);
			this.location.back();
		});

	}

	newDeck(type: string) {

		this.deck = { name: '', type: type, entries: [] };
	}


	cardName(id: string): Observable<string> {
		return this.cardsService.getCard(id).pipe(map(response => {
			console.info('response:', response);
			return response['name'];
		}));
	}
	removeEntry(entry: any) {
		this.deck!.entries = this.deck!.entries.filter(e => e != entry);
	}
	editEntryCard(entry: any) {

	}
}
