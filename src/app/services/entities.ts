import { Injectable } from "@angular/core";
import { Entity, EntityColumn, EntityInfo } from "./entity";
import { Action } from "./backend-service";

export class PlayerAction extends Entity {
    characterClass?: string;
    action!: Action
}

export const monsterEntity: EntityInfo = {
    path: '/monsters',
    columns: [
        EntityColumn.reference('reference', ''),
        EntityColumn.card('monster', '', false),
        EntityColumn.string('name', 'Name'),
        EntityColumn.enum('type', 'Type', ["Humanoid", "Magic", "Undead"]),
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
    path: '/characters',
    columns: [
        EntityColumn.card('class', '', true),
        EntityColumn.string('name', 'Name'),
        EntityColumn.enum('characterClass', 'Class', ["Warrior", "Knight", "Barbarian", "Wizard", "Druid", "Bard", "Paladin", "Thief", "Monk", "Ranger"]),
        EntityColumn.image('image', 'Image'),

    ]

};

export const playerActionsEntity: EntityInfo = {
    path: '/player-actions',
    columns: [
        EntityColumn.card('action', '', false),
        EntityColumn.enum('characterClass', 'Class', ["Warrior", "Knight", "Barbarian", "Wizard", "Druid", "Bard", "Paladin", "Thief", "Monk", "Ranger"]),
        EntityColumn.string('action.title', 'Title'),

    ]

};
