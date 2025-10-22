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
  imageUrl(rule: string) {
        console.info('imageUrl', rule);

    switch (rule) {
      case 'LOST':
        return this.basePath + 'card_lost.svg';
      case 'PULL_MORE':
      case 'PULL':
        return this.basePath + 'card-draw.svg';
      case 'SHUFFLE':
        return this.basePath + 'card_shuffle.svg';
      default:
        return '';
    }
  }
  
}
