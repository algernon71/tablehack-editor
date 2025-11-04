import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Backend } from './backend';


export enum CardPullRule {
  SHUFFLE,
  PULL_MORE,
  LOST
}

export class GameCardAttributes {
  lost?: boolean = false;
  pull?: boolean = false;
  shuffle?: boolean = false;
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


  constructor(private http: HttpClient) {
  }

  getEncounters(): Observable<GameEncounter[]> {
    return this.http.get<GameEncounter[]>(Backend.getBaseUrl());
  }
  addEncounter(encounter: GameEncounter): Observable<GameEncounter> {
    return this.http.post<GameEncounter>(Backend.getBaseUrl(), encounter);
  }
  updateEncounter(encounter: GameEncounter): Observable<GameEncounter> {
    return this.http.put<GameEncounter>(Backend.getBaseUrl() + '//' + encounter.id, encounter);
  }
  deleteEncounter(encounter: GameEncounter): Observable<void> {
    return this.http.delete<void>(Backend.getBaseUrl() + '/' + encounter.id);
  }

}
