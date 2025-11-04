import { Component, Input } from '@angular/core';
import { Character, CharacterAction } from 'src/app/services/characters-service';
import { InitiativeToken } from "../../common/tokens/initiative-token/initiative-token";
import { CardAttributes } from "../../common/card-attributes/card-attributes";
import { RangeSymbol } from "../../common/range-symbol/range-symbol";
import { AttackValues } from "../../common/attack-values/attack-values";
import { Icon } from "../../common/icon/icon";

@Component({
  selector: 'app-character-action-card',
  imports: [InitiativeToken, CardAttributes, RangeSymbol, AttackValues, Icon],
  templateUrl: './character-action-card.html',
  styleUrl: './character-action-card.scss'
})
export class CharacterActionCard {
  @Input()
  character!: Character;

  @Input()
  action!: CharacterAction;

  @Input()
  print = true;

  @Input()
  front = true;

  @Input()
  back = true;

  mainStatIconSize = 'LARGE';
  statIconSize = 'SMALL';
}
