import { Injectable } from '@angular/core';

export class GameEncounter {
  areaId?: string;
  tokenId!: string;
  title!: string;
  rows?: GameEncounterRow[];
}

export class GameEncounterRow {

  monsterReference?: string;
  monsterCount?: number;

}

@Injectable({
  providedIn: 'root'
})
export class EncounterService {
  
}
