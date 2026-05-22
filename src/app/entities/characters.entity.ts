import { EntityColumn, EntityInfo } from '../services/entity';
import { Character } from '../services/characters-service';
import { CardPrintData } from '../components/print/print-cards/print-cards';
import { Action } from '../models/action';

export class CharacterClass {
  id!: string;
  name!: string;
}

export const characterClasses: CharacterClass[] = [
  { id: 'WARRIOR', name: 'Warrior' },
  { id: 'KNIGHT', name: 'Knight' },
  { id: 'PALADIN', name: 'Paladin' },
  { id: 'BARBARIAN', name: 'Barbarian' },
  { id: 'WIZARD', name: 'Wizard' },
  { id: 'DRUID', name: 'Druid' },
  { id: 'MONK', name: 'Monk' },
  { id: 'BARD', name: 'Bard' },
  { id: 'THIEF', name: 'Thief' },
  { id: 'RANGER', name: 'Ranger' },
];

export const charactersEntity: EntityInfo = new EntityInfo('Characters', 'characters')
  .column(EntityColumn.card('class', '', true))
  .column(EntityColumn.string('name', 'Name'))
  .column(EntityColumn.enum('characterClass', 'Class', characterClasses))
  .column(EntityColumn.image('image', 'Image'))
  .column(EntityColumn.number('data.stats.health.startValue', 'HP').withIcon("STAT_HEALTH"))
  .column(EntityColumn.number('data.stats.strength.startValue', 'STR').withIcon("STAT_STRENGTH"))
  .column(EntityColumn.number('data.stats.agility.startValue', 'AGI').withIcon("STAT_AGILITY"))
  .column(EntityColumn.number('data.stats.mana.startValue', 'MANA').withIcon("STAT_MANA"))
  .column(EntityColumn.number('data.stats.luck.startValue', 'AGI').withIcon("STAT_LUCK"))
  .printable('character')
  .print((entity) => {
    const cards: CardPrintData[] = [];
    const character: Character = entity;

    cards.push({
      largeCard: true,
      character: character,
    });

    if (character.data!.actions) {
      character.data!.actions.forEach((action) => {
        const count = !action.count ? 1 : action.count;
        for (let i = 0; i < count; ++i) {
          cards.push({
            actorName: character.name,
            action: action,
          });
        }
      });
      character.standardActions!.forEach((playerAction) => {
        const action: Action = playerAction.action;
        const count = !action.count ? 1 : action.count;
        for (let i = 0; i < count; ++i) {
          cards.push({
            actorName: character.name,
            action: action,
          });
        }
      });
    }
    return cards;
  });

