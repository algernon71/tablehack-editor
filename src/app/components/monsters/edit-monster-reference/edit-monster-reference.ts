import { Component, model } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Monster, MonstersService } from 'src/app/services/monsters';
import { AsyncPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-edit-monster-reference',
  imports: [MatInputModule, MatFormFieldModule, MatAutocompleteModule, FormsModule, AsyncPipe, ReactiveFormsModule],
  templateUrl: './edit-monster-reference.html',
  styleUrl: './edit-monster-reference.scss'
})
export class EditMonsterReference {
  reference = model<string>();

  name?: string;

  monster?: Monster;
  monsterList?: Monster[];
  filteredMonsters?: Observable<Monster[]>;

  constructor(private monsterService: MonstersService) {

  }
  ngOnInit() {
    this.refreshSelected();
    this.refreshList();

  }

  refreshList() {
    this.monsterService.getMonsters().subscribe(response => {
      this.monsterList = response.content;
    });
  }

  refreshSelected() {
    if (this.reference()) {
      this.monsterService.getMonsterByReference(this.reference()!).subscribe(
        response => this.monster = response
      )
    }

  }
  updateValue(value: any) {
    console.info('updateValue', this.reference);
    this.filteredMonsters = this.doFilter();
  }

  doFilter(): Observable<Monster[]> {
    const filterValue = this.reference()!.toLowerCase();

    return this.monsterService.getMonsters()
      .pipe(
        map(response => response.content!.filter(monster => monster.reference && monster.name!.toLowerCase().includes(filterValue))));
  }

  optionSelected(event: any) {
    console.info('optionSelected', event, this.reference());
    this.refreshSelected();
  }
}
