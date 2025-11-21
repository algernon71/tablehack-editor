import { Component, Input } from '@angular/core';
import { CardPrintData } from '../print-cards/print-cards';
import { MonsterCard } from "../../monsters/monster-card/monster-card";
import { ActionCard } from "../../common/action-card/action-card";
import { EncounterCard } from "../../encounters/encounter-card/encounter-card";
import { CharacterCard } from "../../characters/character-card/character-card";
import { CharacterActionCard } from "../../characters/character-action-card/character-action-card";
import { LocationEventCard } from "../../events/location-event-card/location-event-card";
import { LootCard } from "../../loot/loot-card/loot-card";
import { EquipmentItemCard } from "../../equipment/equipment-item-card/equipment-item-card";

@Component({
  selector: 'app-print-card',
  imports: [MonsterCard, ActionCard, EncounterCard, CharacterCard, CharacterActionCard, LocationEventCard, LootCard, EquipmentItemCard],
  templateUrl: './print-card.html',
  styleUrl: './print-card.scss'
})
export class PrintCard {
  @Input()
  card!: CardPrintData;

  @Input()
  front!: boolean;
  @Input()
  back!: boolean;
}
