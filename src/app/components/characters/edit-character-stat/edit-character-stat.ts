import { Component, Input } from '@angular/core';
import { CharactersService, CharacterStatEntry, ProgressionType } from 'src/app/services/characters-service';
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-edit-character-stat',
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatSelectModule],
  templateUrl: './edit-character-stat.html',
  styleUrl: './edit-character-stat.scss'
})
export class EditCharacterStat {
  @Input()
  name?: string;

  @Input()
  stat!: CharacterStatEntry;

  @Input()
  icon?: string;
  progressionTypes: ProgressionType[];


  constructor(private charactersService: CharactersService) {
    this.progressionTypes = this.charactersService.getProgressionTypes();
  }

  ngOnInit() {
    if (this.stat) {
      if (!this.stat.startValue) {
        this.initStat();
      }
    }
  }

  initStat() {
    this.stat.startValue = 2;
    this.stat.maxValue = 15;
    this.stat.progression = "EASY";
  }
}
