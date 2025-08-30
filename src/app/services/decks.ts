import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './cards';

export class Deck {
  id?: string;
  reference?: string;
  name?: string;
  description?: string;
  symbol?: string;
  image?: string;
  type?: string;
  entries!: DeckEntry[];
  cardCount?: number;
}

export class DeckEntry {
  cardId?: string;
  count!: number;
  card?: Card;
 }
@Injectable({
  providedIn: 'root'
})
export class Decks {
	baseUrl = 'http://localhost:8080/api';

  	constructor(private http: HttpClient) { }

	getDecks(type: string,  referenceRequired: boolean): Observable<Deck[]> {
		const options = type && type.trim().length > 0 ?
   			{ params: new HttpParams().set('type', type).set('require-reference', referenceRequired) } : {};
		return this.http.get<Deck[]>(this.baseUrl + '/decks', options);
	}
	
	getDeck(id: string): Observable<Deck> {
		return this.http.get<Deck>(this.baseUrl + '/decks/' + id);
	}
	addDeck(deck: Deck): Observable<Deck>  {
		return this.http.post<Deck>(this.baseUrl + '/decks', deck);
		
	}
	saveDeck(deck: Deck): Observable<Deck>  {
		return this.http.put<Deck>(this.baseUrl + '/decks/' + deck.id, deck);
		
	}
	deleteDeck(deck: Deck) {
		return this.http.delete(this.baseUrl + '/decks/' + deck.id);
		
	}  
}
