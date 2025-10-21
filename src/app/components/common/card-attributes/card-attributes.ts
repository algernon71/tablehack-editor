import { Component, Input } from '@angular/core';
import { CardPullRule, GameCardAttributes } from 'src/app/services/encounter-service';

@Component({
  selector: 'app-card-attributes',
  imports: [],
  templateUrl: './card-attributes.html',
  styleUrl: './card-attributes.scss'
})
export class CardAttributes {
  @Input()
  attributes!: GameCardAttributes;

  basePath = '/public/images/symbols/';
  imageUrl(rule: CardPullRule) {
    switch (rule) {
      case CardPullRule.LOST:
        return this.basePath + 'card_lost.svg';
      case CardPullRule.PULL_MORE:
        return this.basePath + 'card-draw.svg';
      case CardPullRule.SHUFFLE:
        return this.basePath + 'card_shuffle.svg';
    }
  }
  
}
