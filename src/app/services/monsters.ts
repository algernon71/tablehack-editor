import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameCardAttributes } from './encounter-service';

export class Defence {
  physical: number = 0;
	cold: number = 0;
	fire: number = 0;
	electricity: number = 0;
	magic: number = 0;
	poison: number = 0;
}
export class MonsterData {
  actions?: MonsterAction[] = [];
  defence?: Defence;
}

export class Monster {
  id?: number;
  reference: string = '';

  name: string = '';
  level?: number = 1;
  type?: string = 'Humanoid';
  image?: string;
  description?: string = '';
  health?: number = 1;

  data?: MonsterData;
  xp?: number = 1;
  properties?: any = {};

}

export class MonsterAction {
  order?: number;
  count?: number;
  initiative: string = "1";
  title: string = "Move";

  steps: MonsterActionStep[] = [];
  attributes?: GameCardAttributes;
}
export class MonsterActionStep {
  name: string = "Move";
  type: string = "MOVE";
  range?: string;
  damage?: string;
  attributes?: string;
  body?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MonstersService {
  baseUrl = 'http://localhost:8090/api';
	
	constructor(private http: HttpClient) { 
	}

  getMonsters(): Observable<Monster[]> {
		return this.http.get<Monster[]>(this.baseUrl + '/monsters');
	}
  getMonster(id: number): Observable<Monster> {
		return this.http.get<Monster>(this.baseUrl + '/monsters/'+ id);
	}
  getMonsterByReference(reference: string): Observable<Monster> {
		return this.http.get<Monster>(this.baseUrl + '/monsters/by-reference/'+ reference);
	}
  addMonster(monster: Monster): Observable<Monster> {
		return this.http.post<Monster>(this.baseUrl + '/monsters', monster);
	}
  updateMonster(monster: Monster): Observable<Monster> {
		return this.http.put<Monster>(this.baseUrl + '/monsters/' + monster.id, monster);
	}
  deleteMonster(monster: Monster): Observable<void> {
		return this.http.delete<void>(this.baseUrl + '/monsters/' + monster.id);
	}
 
}
