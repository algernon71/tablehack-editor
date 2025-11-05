import { Component } from '@angular/core';
import { ActionCard } from "../../common/action-card/action-card";
import { Monster, Action } from 'src/app/services/monsters';
import { CardPullRule, GameEncounter } from 'src/app/services/encounter-service';
import { EncounterCard } from "../../encounters/encounter-card/encounter-card";
import { GameLoot } from 'src/app/services/loot-service';
import { LootCard } from "../loot-card/loot-card";

@Component({
  selector: 'app-loot-manager',
  imports: [ActionCard, EncounterCard, LootCard],
  templateUrl: './loot-manager.html',
  styleUrl: './loot-manager.scss'
})
export class LootManager {
  monster: Monster = {
    reference: 'MG-1',
    name: 'Goblin Warrior',
    health: 5,
  };


  action: Action = {
    initiative: '2',
    title: 'Charge!',
    order: 1,
    steps: [{
      name: 'Move',
      type: 'MOVE',
      range: '5'
    },
    {
      name: 'Slash',
      type: 'ATTACK',
      damage: {
        physical: "5",
        poison: "1",
        range: "3"
      }
    }],
    attributes: {
      lost: true
    }
  }

  encounter: GameEncounter = {
    title: 'Goblin patroll!',
    description: 'You run into a patrol',
    tokenId: '1',
    rows: [{
      monsterReference: 'MG-1',
      count: 5
    }],
    attributes: {
      lost: true,
      pull: true
    }
  };

  loot: GameLoot = {
    tokenId: '1',
    title: 'Some food',
    rows: []


  };
}
