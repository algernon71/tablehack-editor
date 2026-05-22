import { CardPrintData } from '../components/print/print-cards/print-cards';
import { EntityColumn, EntityInfo } from '../services/entity';
import { Monster } from '../services/monsters';

export const monsterEntity: EntityInfo = new EntityInfo('Monster', 'monsters', [
  EntityColumn.reference('reference', ''),
  EntityColumn.card('monster', '', false),
  EntityColumn.string('name', 'Name'),
  EntityColumn.enum('type', 'Type', ['Goblins', 'Orcs', 'Undead', 'Bandits', 'Demons', 'Mythological', 'Animals']),
  EntityColumn.image('image', 'Image'),
  EntityColumn.number('level', 'Level'),
  EntityColumn.number('health', 'Health'),
  EntityColumn.number('data.defence.physical', 'Defence').withIcon('DEFENCE_PHYSICAL'),
  EntityColumn.number('data.defence.poison', 'Defence').withIcon('DEFENCE_POISON'),
  EntityColumn.number('data.defence.fire', 'Defence').withIcon('DEFENCE_FIRE'),
  EntityColumn.number('data.defence.cold', 'Defence').withIcon('DEFENCE_COLD'),
]).printable('monster').print((entity) => {
  const cards: CardPrintData[] = [];
  const monster: Monster = entity;

  cards.push({
    monster: monster,
  });

  if (monster.data!.actions) {
    monster.data!.actions.forEach((action) => {
      const count = !action.count ? 1 : action.count;
      for (let i = 0; i < count; ++i) {
        cards.push({
          actorName: monster.name,
          actorReference: monster.reference,
          action: action,
        });
      }
    });

  }
  return cards;
});

