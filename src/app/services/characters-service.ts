import { Injectable } from '@angular/core';
import { CardAttributes } from '../components/common/card-attributes/card-attributes';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Backend } from './backend';
import { Damage } from './monsters';
import { Action } from 'src/app/services/backend-service';
import { GameCardAttributes } from './encounter-service';

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
export class Character {
  id!: number;
  name!: string;
  description?: string;


  characterClass = CharacterClass.WARRIOR;
  race = CharacterRace.HUMAN;;
  image?: string;

  data: CharacterData = new CharacterData();

}

export class CharacterData {
  stats: CharacterStats = new CharacterStats();
  actions?: Action[];

}

export class CharacterStats {
  health: CharacterStatEntry = new CharacterStatEntry();
  strength: CharacterStatEntry = new CharacterStatEntry();
  agility: CharacterStatEntry = new CharacterStatEntry();
  mana: CharacterStatEntry = new CharacterStatEntry();
  perception: CharacterStatEntry = new CharacterStatEntry();
  luck: CharacterStatEntry = new CharacterStatEntry();

}
export class CharacterStatEntry {
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
  constructor(private http: HttpClient) { }

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
