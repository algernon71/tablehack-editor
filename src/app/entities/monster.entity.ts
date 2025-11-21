import { EntityColumn, EntityInfo } from '../services/entity';

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
]).printable('monster');

