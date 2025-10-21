import { Component, Input, output } from '@angular/core';
import { GameLoot } from 'src/app/services/loot-service';
import { InitiativeToken } from "../../common/tokens/initiative-token/initiative-token";

@Component({
  selector: 'app-loot-card',
  imports: [InitiativeToken],
  templateUrl: './loot-card.html',
  styleUrl: './loot-card.scss'
})
export class LootCard {
  @Input()
  loot?: GameLoot;

  @Input()
  print = true;
  
  @Input()
  front = true;
  
  @Input()
  back = true;

    click = output<GameLoot>();
}
