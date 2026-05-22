import { Injectable } from '@angular/core';
import { CardAttributes } from '../components/common/card-attributes/card-attributes';
import { HttpClient, HttpParams } from '@angular/common/http';
import { max, Observable } from 'rxjs';
import { Backend } from './backend';
import { Damage } from './monsters';
import { Action } from 'src/app/models/action';
import { GameCardAttributes } from './encounter-service';
import { Entity } from './entity';
import { PlayerAction } from '../entities';

export enum CharacterClass {
  WARRIOR,
  BARBARIAN,
  KNIGHT,
  WIZARD,
  DRUID,
  BARD,
  ALCHEMIST
}

export enum CharacterRace {
  HUMAN,
  ELF,
  DWARF,
  GNOME
}
export class Character extends Entity {
  description?: string;
  characterClass?: string;

  standardActions?: PlayerAction[];
  data?: CharacterData = new CharacterData();
}

export class CharacterData {
  stats: CharacterStats = new CharacterStats();
  actions!: Action[];

}

export class CharacterStats {
  health: CharacterStatEntry = new CharacterStatEntry();
  strength: CharacterStatEntry = new CharacterStatEntry();
  agility: CharacterStatEntry = new CharacterStatEntry();
  mana: CharacterStatEntry = new CharacterStatEntry();
  perception: CharacterStatEntry = new CharacterStatEntry();
  luck: CharacterStatEntry = new CharacterStatEntry();

}

export class ProgressionType {
  constructor(public type: string, public name: string, private startCost: number, private startStride: number, private ramp: number) {

  }

  buildCosts(startValue: number, maxValue: number): number[] {
    const costs: number[] = [];
    let value = 0;
    let nextCostIncrease = startValue + this.startStride;
    let currentCost = this.startCost;
    for (let i = 0; i < startValue!; ++i) {
      costs.push(0);
      value++;
    }

    while (value < maxValue) {
      if (value >= nextCostIncrease) {
        currentCost += 1;
        let nextIncreaseDelta = this.startStride - this.ramp * (currentCost - this.startCost);
        if (nextIncreaseDelta < 1) {
          nextIncreaseDelta = 1;
        }
        nextCostIncrease += nextIncreaseDelta;
      }
      costs.push(currentCost);
      value++;
    }

    return costs;
  }
}

export class CharacterStatEntry {
  startValue?: number = 2;
  maxValue?: number = 10;
  progression?: string = "MEDIUM";
  upgradeCosts: number[] = [0, 0, 1, 2, 3];

}

export enum ActionType {

}

export class CharacterAction {
  initiative!: string;;
  count?: number;
  name!: string;
  description?: string;


  attackName!: string;
  type!: string;
  subtype?: string;
  range?: string;
  damage? = new Damage();
  attributes? = new GameCardAttributes();

}
@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  progressionMap = new Map<string, ProgressionType>();

  constructor(private http: HttpClient) {
    this.initProgressionMap();
  }

  initProgressionMap() {
    this.progressionMap.set("VERY_EASY", new ProgressionType("VERY_EASY", "Very easy", 1, 4, 1))
    this.progressionMap.set("EASY", new ProgressionType("EASY", "Easy", 1, 4, 1))
    this.progressionMap.set("NORMAL", new ProgressionType("NORMAL", "Normal", 1, 2, 0))
    this.progressionMap.set("HARD", new ProgressionType("HARD", "Hard", 2, 1, 1))
    this.progressionMap.set("VERY_HARD", new ProgressionType("VERY_HARD", "Very hard", 3, 1, 1))
  }

  getProgression(progression: string): ProgressionType | undefined {
    return this.progressionMap.get(progression);
  }

  getProgressionTypes(): ProgressionType[] {
    return Array.from(this.progressionMap.values());
  }

  getCharacters(characterIds?: string): Observable<Character[]> {
    let params = new HttpParams();
    if (characterIds) {
      params = params.set('ids', characterIds);
    }
    console.info('getCharacters, params:', params);

    return this.http.get<Character[]>(Backend.getBaseUrl() + '/characters', {
      params: params
    });
  }
  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(Backend.getBaseUrl() + '/characters/' + id);
  }
  getCharacterByReference(reference: string): Observable<Character> {
    return this.http.get<Character>(Backend.getBaseUrl() + '/characters/by-reference/' + reference);
  }
  addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(Backend.getBaseUrl() + '/characters', character);
  }
  updateCharacter(character: Character): Observable<Character> {
    return this.http.put<Character>(Backend.getBaseUrl() + '/characters/' + character.id, character);
  }
  deleteCharacter(character: Character): Observable<void> {
    return this.http.delete<void>(Backend.getBaseUrl() + '/characters/' + character.id);
  }

}
