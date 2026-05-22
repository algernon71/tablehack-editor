import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Character, CharactersService, CharacterStatEntry, ProgressionType } from 'src/app/services/characters-service';
import { Resources } from 'src/app/services/resources';

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

  constructor(private dialog: MatDialog, private charactersService: CharactersService,
    public resourcesService: Resources) {

  }

  ngOnInit() {
    if (this.stat) {
      if (!this.stat.startValue) {
        this.initStat();
      }

      this.initUpgradeCosts()


    }

  }
  initUpgradeCosts() {
    console.info('initUpgradeCosts', this.stat, this.charactersService);
    const progression = this.charactersService.getProgression(this.stat.progression!)!;
    this.stat.upgradeCosts = progression.buildCosts(this.stat.startValue!, this.stat.maxValue!);
    console.info('initUpgradeCosts() ', this.stat.upgradeCosts);
  }

  initStat() {
    this.stat.startValue = 2;
    this.stat.maxValue = 15;
    this.stat.progression = "EASY";
  }
}
