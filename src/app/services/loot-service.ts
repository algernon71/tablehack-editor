import { Injectable } from '@angular/core';

export class GameLoot {
  tokenId?: string;
  title?: string;

  rows?: GameLootRow[];
}

export class GameLootRow {
  itemId?: string;
  description?: string;
  count?: number;
}

@Injectable({
  providedIn: 'root'
})
export class LootService {
  
}
