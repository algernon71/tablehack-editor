import { Entity, EntityColumn, EntityInfo } from '../services/entity';
import { Action } from '../models/action';

export class PlayerAction extends Entity {
  characterClass?: string;
  action!: Action;
}

export const playerActionsEntity: EntityInfo = new EntityInfo('Standard Actions', 'player-actions', [
  EntityColumn.card('action', '', false),
  EntityColumn.enum('characterClass', 'Class', ['All', 'Warrior', 'Knight', 'Barbarian', 'Wizard', 'Druid', 'Bard', 'Paladin', 'Thief', 'Monk', 'Ranger']),
  EntityColumn.string('action.title', 'Title'),
]).nonPrintable();

