import { Damage, Defence } from '../services/monsters';
import { GameCardAttributes } from '../services/encounter-service';

export class MonsterActionStep {
  name: string = 'Move';
  type: string = 'MOVE';
  description?: string;
  subtype?: string = 'MOVE_WALK';
  range?: string;
  damage?: Damage;
  defence?: Defence;
  attributes?: string;
  body?: string;
  targettingId?: number;
}

export class Action {
  order?: number;
  count?: number = 1;
  initiative: string = '2';
  level?: string;
  title?: string;
  description?: string;
  targettingId?: number;
  steps: MonsterActionStep[] = [];
  attributes?: GameCardAttributes = new GameCardAttributes();
}

