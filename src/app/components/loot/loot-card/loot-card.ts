import { Component, Input, output } from '@angular/core';
import { Loot } from 'src/app/entities';
import { GameLoot } from 'src/app/services/loot-service';
import { LootToken } from "../../common/tokens/loot-token/loot-token";
import { Image } from "../../common/image/image";
import { CardAttributes } from "../../common/card-attributes/card-attributes";

@Component({
  selector: 'app-loot-card',
  imports: [LootToken, Image, CardAttributes],
  templateUrl: './loot-card.html',
  styleUrl: './loot-card.scss'
})
export class LootCard {
  @Input()
  loot?: Loot;

  @Input()
  print = true;

  @Input()
  front = true;

  @Input()
  back = true;

  imageSize = 'CARD_SMALL';

  click = output<Loot>();

  ngOnInit() {
    switch (this.loot?.rows?.length) {
      case 0:
      case 1:
        this.imageSize = 'CARD_LARGE';
        break;

      case 2:
        this.imageSize = 'CARD_MEDIUM';
        break;
      case 3:
      case 4:
        this.imageSize = 'CARD_SMALL';
        break;
      default:
        this.imageSize = 'CARD_TINY';
        break;

    }
  }
}
