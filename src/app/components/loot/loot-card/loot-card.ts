import { Component, Input, output } from '@angular/core';
import { GameLoot } from 'src/app/services/loot-service';

@Component({
  selector: 'app-loot-card',
  imports: [],
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
