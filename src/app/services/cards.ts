import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Backend } from './backend';


export interface StatValue {
	name: string,
	upgradeCosts: number[]
}
export class Card {
	id?: string;
	reference?: string;
	html?: string;
	level?: string;
	name!: string;
	type!: string;
	orientation?: boolean = false;
	horizontal?: boolean = false;
	description?: string;
	data?: any;
}

export class CardType {
	id!: string;
	name!: string;
	namePlural!: string;
	size?: string;
	description?: string;
	columns?: CardTypeField[];
	deckFields?: CardTypeField[];
	fields?: CardTypeField[];
	entries?: CardTypeEntry[];
	frontEntries?: CardTypeEntry[];
}

export class CardTypeField {
	id!: string;
	type!: string;
	name!: string;
	maxCount?: number;
	minCount?: number;
}

export class CardTypeEntry {
	id!: string;
	type!: string;
	properties?: any;
	columns?: CardTypeEntry[][];
}

@Injectable({
	providedIn: 'root'
})
export class Cards {
	cardTypes: CardType[] = [];

	cardTypeMap = new Map<string, CardType>();

	constructor(private http: HttpClient) {
		this.getCardTypes().subscribe(response => { });
	}

	getCards(type: string) {
		const options = type && type.trim().length > 0 ?
			{ params: new HttpParams().set('type', type) } : {};
		return this.http.get<any>(Backend.getBaseUrl() + '/cards', options);
	}

	getCard(cardId: string): Observable<Card> {
		return this.http.get<Card>(Backend.getBaseUrl() + '/cards/' + cardId);
	}
	addCard(card: Card) {
		return this.http.post(Backend.getBaseUrl() + '/cards', card);

	}
	saveCard(card: Card) {
		return this.http.put(Backend.getBaseUrl() + '/cards/' + card.id, card);

	}
	deleteCard(card: Card) {
		return this.http.delete(Backend.getBaseUrl() + '/cards/' + card.id);

	}
	getCardTypes(): Observable<CardType[]> {
		console.info
		return this.http.get<CardType[]>(Backend.getBaseUrl() + '/cardtypes').pipe(map(types => {
			var end = new Date().getTime();
			this.cardTypes = types;
			this.updateTypeMap();

			return types;
		}));
	}


	getCardType(typeId: string): CardType | undefined {
		const type = this.cardTypeMap.get(typeId);
		if (!type) {
			console.info('Failed to lookup type:' + typeId + ' map:', this.cardTypeMap);
		}

		return type;
	}

	updateTypeMap() {
		this.cardTypes.forEach(type => {
			this.cardTypeMap.set(type.id, type);
		});

	}
}
