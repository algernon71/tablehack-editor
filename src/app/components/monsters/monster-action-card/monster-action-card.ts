import { Component, Input, output } from '@angular/core';
import { Monster, MonsterAction } from 'src/app/services/monsters';
import { Icon } from '../../common/icon/icon';
import { TokenSymbol } from "../../common/token-symbol/token-symbol";
import { EncounterToken } from "../../common/tokens/encounter-token/encounter-token";
import { EventToken } from "../../common/tokens/event-token/event-token";
import { InitiativeToken } from "../../common/tokens/initiative-token/initiative-token";
import { DialogModule } from "@angular/cdk/dialog";
import { CardAttributes } from "../../common/card-attributes/card-attributes";
import { AttackValues } from "../../common/attack-values/attack-values";
import { RangeSymbol } from "../../common/range-symbol/range-symbol";

@Component({
  selector: 'app-monster-action-card',
  imports: [Icon, TokenSymbol, EncounterToken, EventToken, InitiativeToken, DialogModule, CardAttributes, AttackValues, RangeSymbol],
  templateUrl: './monster-action-card.html',
  styleUrl: './monster-action-card.scss'
})
export class MonsterActionCard {
  @Input()
  monster?: Monster;

  @Input()
  action?: MonsterAction;

  @Input()
  print = true;

  @Input()
  front = true;

  @Input()
  back = true;

  mainStatIconSize = 'LARGE';
  statIconSize = 'SMALL';

  click = output<MonsterAction>();


}
