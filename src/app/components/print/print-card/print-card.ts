import { Component, Input } from '@angular/core';
import { CardPrintData } from '../print-cards/print-cards';
import { MonsterCard } from "../../monsters/monster-card/monster-card";
import { MonsterActionCard } from "../../monsters/monster-action-card/monster-action-card";
import { EncounterCard } from "../../encounters/encounter-card/encounter-card";
import { CharacterCard } from "../../characters/character-card/character-card";
import { CharacterActionCard } from "../../characters/character-action-card/character-action-card";

@Component({
  selector: 'app-print-card',
  imports: [MonsterCard, MonsterActionCard, EncounterCard, CharacterCard, CharacterActionCard],
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
