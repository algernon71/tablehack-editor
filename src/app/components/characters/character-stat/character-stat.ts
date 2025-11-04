import { Component, Input } from '@angular/core';
import { Character, CharacterStatEntry } from 'src/app/services/characters-service';

@Component({
  selector: 'app-character-stat',
  imports: [],
  templateUrl: './character-stat.html',
  styleUrl: './character-stat.scss'
})
export class CharacterStat {
  @Input()
  name?: string;

  @Input()
  stat!: CharacterStatEntry;

  @Input()
  icon?: string;

}
