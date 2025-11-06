import { Component, Input, output } from '@angular/core';
import { Action } from 'src/app/services/backend-service';
import { Icon } from '../icon/icon';
import { InitiativeToken } from "../tokens/initiative-token/initiative-token";
import { DialogModule } from "@angular/cdk/dialog";
import { CardAttributes } from "../card-attributes/card-attributes";
import { AttackValues } from "../attack-values/attack-values";
import { RangeSymbol } from "../range-symbol/range-symbol";
import { DefenceValues } from "../defence-values/defence-values";

@Component({
  selector: 'app-action-card',
  imports: [Icon, InitiativeToken, DialogModule, CardAttributes, AttackValues, RangeSymbol, DefenceValues],
  templateUrl: './action-card.html',
  styleUrl: './action-card.scss'
})
export class ActionCard {
  @Input()
  actorName?: string;

  @Input()
  actorReference?: string;

  @Input()
  action?: Action;

  @Input()
  print = true;

  @Input()
  front = true;

  @Input()
  back = true;

  mainStatIconSize = 'LARGE';
  statIconSize = 'SMALL';



}
