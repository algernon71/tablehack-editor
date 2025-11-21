import { Entity, EntityColumn, EntityInfo } from '../services/entity';
import { Damage, Defence } from '../services/monsters';

export class ItemSubType {
  id!: string;
  name!: string;
}

export class ItemType {
  id!: string;
  name!: string;
  subtypes?: ItemSubType[];
  damage?: boolean = false;
  defence?: boolean = false;
}

export class ItemCategory {
  id!: string;
  name!: string;
}

export const itemTypes: ItemType[] = [
  {
    id: 'WEAPON_MELEE',
    name: 'Melee weapon',
    damage: true,
    subtypes: [
      { id: 'SWORD', name: 'Sword' },
      { id: 'AXE', name: 'Axe' },
    ],
  },
  {
    id: 'WEAPON_RANGE',
    name: 'Range weapon',
    damage: true,
    subtypes: [
      { id: 'BOW', name: 'Bow' },
      { id: 'CROWSBOW', name: 'Crossbow' },
    ],
  },
  { id: 'ARMOR', name: 'Armor', defence: true },
  { id: 'HELMET', name: 'Helmet', defence: true },
  { id: 'RING', name: 'Ring', defence: true, damage: true },
];

export const itemCategories: ItemCategory[] = [
  { id: 'COMMON', name: 'Common' },
  { id: 'UnCOMMON', name: 'Uncommon' },
  { id: 'RARE', name: 'Rare' },
  { id: 'UNIQUE', name: 'Unique' },
];

export class ItemData {
  location?: string;
  weight?: number;
  value?: number;
  minStrength?: number;
  minAgility?: number;
  charges?: number;
  durability?: number;
  defence?: Defence;
  damage?: Damage;
}

export class EquipmentItem extends Entity {
  reference?: string;
  type!: string;
  subType?: string;
  category?: string;
  description?: string;
  data!: ItemData;
}

export const equipmentEntity: EntityInfo = new EntityInfo('Equipment', 'items', [
  EntityColumn.card('equipment', '', false),
  EntityColumn.reference('reference', ''),
  EntityColumn.enum('category', 'Category', itemCategories),
  EntityColumn.enum('type', 'Type', itemTypes),
  EntityColumn.string('name', 'Name'),
  EntityColumn.number('data.weight', 'Weight'),
  EntityColumn.number('data.value', 'Value'),
  EntityColumn.number('data.durability', 'Durability'),
  EntityColumn.number('data.defence.physical', 'Defence').withIcon('DEFENCE_PHYSICAL'),
  EntityColumn.number('data.damage.physical', 'Defence').withIcon('ATTACK_PHYSICAL'),
]).printable('equipment');

