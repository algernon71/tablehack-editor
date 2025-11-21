import { Injectable } from "@angular/core";
import { Entity, EntityColumn, EntityInfo } from "./entity";
import { Action } from "./backend-service";
import { Damage, Defence } from "./monsters";
import { CardAttributes } from "../components/common/card-attributes/card-attributes";
import { GameCardAttributes } from "./encounter-service";
import { CardPrintData } from "../components/print/print-cards/print-cards";
import { Character } from "./characters-service";

export class PlayerAction extends Entity {
    characterClass?: string;
    action!: Action;


}

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

export class TestClass {
    name!: string;
    testMe!: (target: TestClass, name: string) => string;
}

export const test: TestClass = {
    name: 'Steve',
    testMe: (target, name) => {
        console.info('callback', target);
        return "Hello " + name + " I am " + target.name;
    }
};

console.info('Result:' + test.testMe(test, 'Joe'));

export class CharacterClass {
    id!: string;
    name!: string;
}
export const characterClasses: CharacterClass[] = [
    {
        id: 'WARRIOR',
        name: 'Warrior'
    },
    {
        id: 'KNIGHT',
        name: 'Knight'
    },
    {
        id: 'BARBARIAN',
        name: 'Barbarian'
    },
    {
        id: 'WIZARD',
        name: 'Wizard'
    },
    {
        id: 'DRUID',
        name: 'Druid'
    },
    {
        id: 'THIEF',
        name: 'Thied'
    },
    {
        id: 'RANGER',
        name: 'Ranger'
    },
];

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
            {
                id: 'SWORD',
                name: 'Sword'
            },
            {
                id: 'AXE',
                name: 'Axe'
            }
        ]
    },
    {
        id: 'WEAPON_RANGE',
        name: 'Range weapon',
        damage: true,
        subtypes: [
            {
                id: 'BOW',
                name: 'Bow'
            },
            {
                id: 'CROWSBOW',
                name: 'Crossbow'
            }
        ]
    },
    {
        id: 'ARMOR',
        name: 'Armor',
        defence: true
    },
    {
        id: 'HELMET',
        name: 'Helmet',
        defence: true
    },
    {
        id: 'RING',
        name: 'Ring',
        defence: true,
        damage: true
    },
];

export const itemCategories: ItemCategory[] = [
    {
        id: 'COMMON',
        name: 'Common'
    }, {
        id: 'UnCOMMON',
        name: 'Uncommon'
    }, {
        id: 'RARE',
        name: 'Rare'
    }, {
        id: 'UNIQUE',
        name: 'Unique'
    }];
export class EquipmentItem extends Entity {
    reference?: string;
    type!: string;
    subType?: string;
    category?: string;
    description?: string;
    data!: ItemData;
}

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

export class Scene {
    reference?: string;
    name?: string;
    description?: string;
    data?: SceneData;

}


export class SceneData {
    locationEvents: LocationEvent[] = [];
    encounterTypes: EncounterType[] = [];
    lootTypes: LootType[] = [];
    eventTypes: EventType[] = [];
}

export class EncounterType {
    tokenId?: string;
    name?: string;
    encounters?: Encounter[];
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

export class EncounterRow {
    monsterReference?: string;
    count?: number;
}


export class LootType {
    tokenId?: string;
    name?: string;
    image?: string;
    loot?: Loot[];
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

export class LootRow {
    type?: string;
    itemReference?: string;
    image?: string;
    count?: number;
}

export class EventType {
    tokenId?: string;
    name?: string;
    events?: Event[];
}

export class Event {
    name?: string;
    descripton?: string;
    count?: number;
}

export class LocationEvent {

    id?: string;
    name?: string;
    description?: string;
    pullCards?: CardPull[];
}

export class CardPull {
    type!: string;
    value!: string;
}


export const monsterEntity: EntityInfo = new EntityInfo('Monster', 'monsters',
    [
        EntityColumn.reference('reference', ''),
        EntityColumn.card('monster', '', false),
        EntityColumn.string('name', 'Name'),
        EntityColumn.enum('type', 'Type', ["Goblins", "Orcs", "Undead", "Bandits", "Demons", "Mythological", "Animals"]),
        EntityColumn.image('image', 'Image'),
        EntityColumn.number('level', 'Level'),
        EntityColumn.number('health', 'Health'),
        EntityColumn.number('data.defence.physical', 'Defence').withIcon('DEFENCE_PHYSICAL'),
        EntityColumn.number('data.defence.poison', 'Defence').withIcon('DEFENCE_POISON'),
        EntityColumn.number('data.defence.fire', 'Defence').withIcon('DEFENCE_FIRE'),
        EntityColumn.number('data.defence.cold', 'Defence').withIcon('DEFENCE_COLD')
    ]).printable('monster');


export const charactersEntity: EntityInfo = new EntityInfo('Characters', 'characters')
    .column(EntityColumn.card('class', '', true))
    .column(EntityColumn.string('name', 'Name'))
    .column(EntityColumn.enum('characterClass', 'Class', characterClasses))
    .column(EntityColumn.image('image', 'Image')).printable('character').print((entity) => {
        const cards: CardPrintData[] = [];

        const character: Character = entity;
        cards.push(
            {
                largeCard: true,
                character: character
            }
        );

        if (character.data!.actions) {
            character.data!.actions.forEach(action => {
                const count = !action.count ? 1 : action.count;
                for (let i = 0; i < count; ++i) {
                    cards.push(
                        {
                            actorName: character.name,
                            action: action,

                        }
                    );

                }

            });
            character.standardActions!.forEach(playerAction => {
                const action: Action = playerAction.action;
                const count = !action.count ? 1 : action.count;
                for (let i = 0; i < count; ++i) {
                    cards.push(
                        {
                            actorName: character.name,
                            action: action,

                        }
                    );

                }

            });

        }
        return cards;
    });



export const equipmentEntity: EntityInfo = new EntityInfo('Equipment', 'items',
    [
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


export const playerActionsEntity: EntityInfo = new EntityInfo('Standard Actions', 'player-actions',
    [
        EntityColumn.card('action', '', false),
        EntityColumn.enum('characterClass', 'Class', ["All", "Warrior", "Knight", "Barbarian", "Wizard", "Druid", "Bard", "Paladin", "Thief", "Monk", "Ranger"]),
        EntityColumn.string('action.title', 'Title'),

    ]).nonPrintable();

export const sceneEntity: EntityInfo = new EntityInfo('Scenes', 'scenes',
    [
        EntityColumn.reference('reference', 'reference'),
        EntityColumn.string('name', 'Name'),
    ]).print((entity) => {
        const cards: CardPrintData[] = [];

        const scene: Scene = entity;

        scene.data?.locationEvents.forEach(locationEvent => {
            cards.push(
                {
                    locationEvent: locationEvent
                }
            );

        });
        scene.data?.lootTypes?.forEach(type => {
            type.loot?.forEach(l => {
                const count = !l.count ? 1 : l.count;
                for (let i = 0; i < count; ++i) {
                    cards.push(
                        {
                            loot: l
                        }
                    );

                }

            });

        });
        scene.data?.encounterTypes?.forEach(type => {

            type.encounters?.forEach(encounter => {
                const count = !encounter.count ? 1 : encounter.count;
                for (let i = 0; i < count; ++i) {
                    cards.push(
                        {
                            encounter: encounter
                        }
                    );

                }

            });

        });
        return cards;
    });


export const encounterTypeEntity: EntityInfo = new EntityInfo('Encounter types', 'encounter-types',
    [
        EntityColumn.reference('tokenId', 'Token'),
        EntityColumn.string('name', 'Name'),
    ]);

export const encounterEntity: EntityInfo = new EntityInfo('Encounter types', 'encounter-types',
    [
        EntityColumn.card('encounter', '', false),
        EntityColumn.number('count', '#'),
        EntityColumn.string('name', 'Name'),
        EntityColumn.string('description', 'Description'),
    ]);

export const lootEntity: EntityInfo = new EntityInfo('Loot', 'loot',
    [
        EntityColumn.card('loot', '', false),
        EntityColumn.number('count', '#'),
        EntityColumn.string('name', 'Name'),
        EntityColumn.string('description', 'Description'),
    ]);

export const locationEventEntity: EntityInfo = new EntityInfo('Location Events', 'location-events',
    [
        EntityColumn.reference('id', ''),
        EntityColumn.string('name', 'Name')
    ]);

