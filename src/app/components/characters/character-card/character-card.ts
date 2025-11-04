import { Component, Input } from '@angular/core';
import { Character } from 'src/app/services/characters-service';
import { Icon } from '../../common/icon/icon';
import { Image } from '../../common/image/image';
import { CharacterStat } from "../character-stat/character-stat";

@Component({
  selector: 'app-character-card',
  imports: [Icon, Image, CharacterStat],
  templateUrl: './character-card.html',
  styleUrl: './character-card.scss'
})
export class CharacterCard {
  @Input()
  character?: Character;

  @Input()
  print = false;

  @Input()
  front = true;

  @Input()
  back = true;

  mainStatIconSize = 'LARGE';
  statIconSize = 'SMALL';
}
