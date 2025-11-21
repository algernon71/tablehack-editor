import { Component, Input, output } from '@angular/core';
import { GameEncounter } from 'src/app/services/encounter-service';
import { EncounterToken } from "../../common/tokens/encounter-token/encounter-token";
import { MonsterCardReference } from "../../monsters/monster-card-reference/monster-card-reference";
import { CardAttributes } from "../../common/card-attributes/card-attributes";
import { AlertnessToken } from "../../common/tokens/alertness-token/alertness-token";
import { Encounter } from 'src/app/entities';

@Component({
  selector: 'app-encounter-card',
  imports: [EncounterToken, MonsterCardReference, CardAttributes, AlertnessToken],
  templateUrl: './encounter-card.html',
  styleUrl: './encounter-card.scss'
})
export class EncounterCard {
  @Input()
  encounter?: Encounter;

  @Input()
  print = true;

  @Input()
  front = true;

  @Input()
  back = true;




}
