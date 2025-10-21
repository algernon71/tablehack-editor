import { Component, Input, output } from '@angular/core';
import { GameEncounter } from 'src/app/services/encounter-service';
import { EncounterToken } from "../../common/tokens/encounter-token/encounter-token";
import { MonsterCardReference } from "../../monsters/monster-card-reference/monster-card-reference";
import { CardAttributes } from "../../common/card-attributes/card-attributes";

@Component({
  selector: 'app-encounter-card',
  imports: [EncounterToken, MonsterCardReference, CardAttributes],
  templateUrl: './encounter-card.html',
  styleUrl: './encounter-card.scss'
})
export class EncounterCard {
  @Input()
  encounter?: GameEncounter;

  @Input()
  print = true;
  
  @Input()
  front = true;
  
  @Input()
  back = true;

  click = output<GameEncounter>();



}
