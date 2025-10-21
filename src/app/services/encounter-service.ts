import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export enum CardPullRule {
  SHUFFLE,
  PULL_MORE,
  LOST
}

export class GameCardAttributes {
  pullRules?: CardPullRule[];
}

export class GameEncounter {
  id?: number;
  areaId?: string;
  tokenId!: string;
  title!: string;
  description?: string;
  rows?: GameEncounterRow[];
  attributes?: GameCardAttributes;
}

export class GameEncounterRow {

  monsterReference?: string;
  count?: number;

}

@Injectable({
  providedIn: 'root'
})
export class EncounterService {
  baseUrl = 'http://localhost:8090/api/encounters';

	
	constructor(private http: HttpClient) { 
	}

  getEncounters(): Observable<GameEncounter[]> {
		return this.http.get<GameEncounter[]>(this.baseUrl);
	}
  addEncounter(encounter: GameEncounter): Observable<GameEncounter> {
		return this.http.post<GameEncounter>(this.baseUrl, encounter);
	}
  updateEncounter(encounter: GameEncounter): Observable<GameEncounter> {
		return this.http.put<GameEncounter>(this.baseUrl + '//' + encounter.id, encounter);
	}
  deleteEncounter(encounter: GameEncounter): Observable<void> {
		return this.http.delete<void>(this.baseUrl + '/' + encounter.id);
	}
   
}
