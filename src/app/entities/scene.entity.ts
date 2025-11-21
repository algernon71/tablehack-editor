import { EntityColumn, EntityInfo } from '../services/entity';
import { GameCardAttributes } from '../services/encounter-service';
import { CardPrintData } from '../components/print/print-cards/print-cards';

export class CardPull {
  type!: string;
  value!: string;
}

export class LocationEvent {
  id?: string;
  name?: string;
  description?: string;
  pullCards?: CardPull[];
}

export class LootRow {
  type?: string;
  itemReference?: string;
  image?: string;
  count?: number;
}

export class Loot {
  scene?: string;
  tokenId?: string;
  name?: string;
  description?: string;
  goldSum?: number;
  count?: number;
  rows?: LootRow[];
  attributes?: GameCardAttributes;
}

export class LootType {
  tokenId?: string;
  name?: string;
  image?: string;
  loot?: Loot[];
}

export class EncounterRow {
  monsterReference?: string;
  count?: number;
}

export class Encounter {
  scene?: string;
  tokenId?: string;
  alertness?: string;
  name?: string;
  description?: string;
  count?: number;
  rows?: EncounterRow[];
  attributes?: GameCardAttributes;
}

export class EncounterType {
  tokenId?: string;
  name?: string;
  encounters?: Encounter[];
}

export class Event {
  name?: string;
  descripton?: string;
  count?: number;
}

export class EventType {
  tokenId?: string;
  name?: string;
  events?: Event[];
}

export class SceneData {
  locationEvents: LocationEvent[] = [];
  encounterTypes: EncounterType[] = [];
  lootTypes: LootType[] = [];
  eventTypes: EventType[] = [];
}

export class Scene {
  reference?: string;
  name?: string;
  description?: string;
  data?: SceneData;
}

export const sceneEntity: EntityInfo = new EntityInfo('Scenes', 'scenes', [
  EntityColumn.reference('reference', 'reference'),
  EntityColumn.string('name', 'Name'),
]).print((entity) => {
  const cards: CardPrintData[] = [];
  const scene: Scene = entity;

  scene.data?.locationEvents.forEach((locationEvent) => {
    cards.push({ locationEvent });
  });

  scene.data?.lootTypes?.forEach((type) => {
    type.loot?.forEach((loot) => {
      const count = !loot.count ? 1 : loot.count;
      for (let i = 0; i < count; ++i) {
        cards.push({ loot });
      }
    });
  });

  scene.data?.encounterTypes?.forEach((type) => {
    type.encounters?.forEach((encounter) => {
      const count = !encounter.count ? 1 : encounter.count;
      for (let i = 0; i < count; ++i) {
        cards.push({ encounter });
      }
    });
  });

  return cards;
});

export const encounterTypeEntity: EntityInfo = new EntityInfo('Encounter types', 'encounter-types', [
  EntityColumn.reference('tokenId', 'Token'),
  EntityColumn.string('name', 'Name'),
]);

export const encounterEntity: EntityInfo = new EntityInfo('Encounter types', 'encounter-types', [
  EntityColumn.card('encounter', '', false),
  EntityColumn.number('count', '#'),
  EntityColumn.string('name', 'Name'),
  EntityColumn.string('description', 'Description'),
]);

export const lootEntity: EntityInfo = new EntityInfo('Loot', 'loot', [
  EntityColumn.card('loot', '', false),
  EntityColumn.number('count', '#'),
  EntityColumn.string('name', 'Name'),
  EntityColumn.string('description', 'Description'),
]);

export const locationEventEntity: EntityInfo = new EntityInfo('Location Events', 'location-events', [
  EntityColumn.reference('id', ''),
  EntityColumn.string('name', 'Name'),
]);

