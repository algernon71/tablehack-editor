import { Injectable } from "@angular/core";
import { Entity, EntityColumn, EntityInfo } from "./entity";
import { Action } from "./backend-service";
import { Damage, Defence } from "./monsters";
import { CardAttributes } from "../components/common/card-attributes/card-attributes";

export class PlayerAction extends Entity {
    characterClass?: string;
    action!: Action
}

export class EquipmentItem extends Entity {
    reference?: string;
    type!: string;
    subType?: string;
    description?: string;
    data!: ItemData;
}

export class ItemData {
    location?: string;
    weight?: number;
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
    encounterTypes?: EncounterType[];
    eventTypes?: EventType[];
}

export class EncounterType {
    tokenId?: string;
    name?: string;
    encounters?: Encounter[];
}

export class Encounter {
    name?: string;
    descripton?: string;
    count?: number;
    rows?: EncounterRow[];
    attributes?: CardAttributes;
}

export class EncounterRow {
    monsterReference?: string;
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


export const monsterEntity: EntityInfo = {
    name: 'Monster',
    typeId: 'monsters',
    path: '/monsters',
    printPath: 'monsters',
    columns: [
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
    ]

};

export const charactersEntity: EntityInfo = {
    name: 'Characters',
    typeId: 'characters',
    path: '/characters',
    printPath: 'chars',
    columns: [
        EntityColumn.card('class', '', true),
        EntityColumn.string('name', 'Name'),
        EntityColumn.enum('characterClass', 'Class', ["Warrior", "Knight", "Barbarian", "Wizard", "Druid", "Bard", "Paladin", "Thief", "Monk", "Ranger"]),
        EntityColumn.image('image', 'Image'),

    ]

};


export const equipmentEntity: EntityInfo = {
    name: 'Equipment',
    typeId: 'items',
    path: '/items',
    printPath: 'equipment',
    columns: [
        EntityColumn.card('equipment', '', true),
        EntityColumn.reference('reference', ''),
        EntityColumn.enum('type', 'Type', ["Warrior", "Knight", "Barbarian", "Wizard", "Druid", "Bard", "Paladin", "Thief", "Monk", "Ranger"]),
        EntityColumn.string('name', 'Name'),

    ]

};

export const playerActionsEntity: EntityInfo = {
    name: 'Standard Actions',
    typeId: 'actions',
    path: '/player-actions',
    columns: [
        EntityColumn.card('action', '', false),
        EntityColumn.enum('characterClass', 'Class', ["All", "Warrior", "Knight", "Barbarian", "Wizard", "Druid", "Bard", "Paladin", "Thief", "Monk", "Ranger"]),
        EntityColumn.string('action.title', 'Title'),

    ]

};

export const sceneEntity: EntityInfo = {
    name: 'Scenes',
    typeId: 'scenes',
    path: '/scenes',
    columns: [
        EntityColumn.reference('reference', 'reference'),
        EntityColumn.string('name', 'Name'),

    ]

};

export const encounterTypeEntity: EntityInfo = {
    name: 'Encounter types',
    typeId: 'encounter-types',
    path: '/encounter-types',
    columns: [
        EntityColumn.reference('tokenId', 'Token'),
        EntityColumn.string('name', 'Name'),
    ]

};

export const encounterEntity: EntityInfo = {
    name: 'Encounter types',
    typeId: 'encounter-types',
    path: '/encounter-types',
    columns: [
        EntityColumn.number('count', '#'),
        EntityColumn.string('name', 'Name'),
        EntityColumn.string('description', 'Description'),
    ]

};

export const eventTypeEntity: EntityInfo = {
    name: 'Events types',
    typeId: 'event-types',
    path: '/event-types',
    columns: [
        EntityColumn.reference('tokenId', ''),
        EntityColumn.string('name', 'Name'),

    ]

};
