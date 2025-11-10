import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameCardAttributes } from './encounter-service';
import { Backend } from './backend';
import { Action } from './backend-service';
import { Entity, EntityPage } from './entity';

export class DefenceType {

  constructor(public iconType: string, public fieldName: string) { }

  getValue(defence: any): any {
    return defence[this.fieldName];
  }
  setValue(defence: any, value: any): any {

    console.info('setValue', value);
    return defence[this.fieldName] = value;
  }

}


export class Defence {
  physical: string = "0";
  cold: string = "0";
  fire: string = "0";
  electricity: string = "0";
  magic: string = "0";
  poison: string = "0";

  static types: DefenceType[] = [
    new DefenceType('DEFENCE_PHYSICAL', 'physical'),
    new DefenceType('DEFENCE_POISON', 'poison'),
    new DefenceType('DEFENCE_COLD', 'cold'),
    new DefenceType('DEFENCE_FIRE', 'fire'),
    new DefenceType('DEFENCE_ELECTRICITY', 'electricity'),
    new DefenceType('DEFENCE_MAGIC', 'magic'),
  ];
}

export class Damage {
  physical?: string = "0";
  cold?: string = "0";
  fire?: string = "0";
  electricity?: string = "0";
  life?: string = "0";
  energy?: string = "0";
  fear?: string = "0";
  poison?: string = "0";
  group?: string = "0";
  area?: string = "0";
  cone?: string = "0";
  explosion?: string = "0";
  range?: string = "0";
  ray?: string = "0";
}
export class MonsterData {
  actions?: Action[] = [];
  defence?: Defence = new Defence();
}



export class Monster extends Entity {
  reference: string = '';

  level?: number = 1;
  type?: string = 'Humanoid';
  description?: string = '';
  health?: number = 1;

  data?: MonsterData = new MonsterData();
  xp?: number = 1;
  properties?: any = {};

}


export class MonsterActionTarget {
  id!: number;
  name!: string;
  description!: string;
}


@Injectable({
  providedIn: 'root'
})
export class MonstersService {

  constructor(private http: HttpClient) {
  }

  getMonsters(monsterIds?: string): Observable<EntityPage> {
    let params = new HttpParams();
    if (monsterIds) {
      console.info('getMonsters, set params:', monsterIds);
      params = params.set('ids', monsterIds);
    }
    console.info('getMonsters, params:', params);

    return this.http.get<EntityPage>(Backend.getBaseUrl() + '/monsters', {
      params: params
    });
  }
  getMonster(id: number): Observable<Monster> {
    return this.http.get<Monster>(Backend.getBaseUrl() + '/monsters/' + id);
  }
  getMonsterByReference(reference: string): Observable<Monster> {
    return this.http.get<Monster>(Backend.getBaseUrl() + '/monsters/by-reference/' + reference);
  }
  addMonster(monster: Monster): Observable<Monster> {
    return this.http.post<Monster>(Backend.getBaseUrl() + '/monsters', monster);
  }
  updateMonster(monster: Monster): Observable<Monster> {
    return this.http.put<Monster>(Backend.getBaseUrl() + '/monsters/' + monster.id, monster);
  }
  deleteMonster(monster: Monster): Observable<void> {
    return this.http.delete<void>(Backend.getBaseUrl() + '/monsters/' + monster.id);
  }

}
