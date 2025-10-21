import { Component, Input } from '@angular/core';
import { Monster, MonstersService } from 'src/app/services/monsters';

@Component({
  selector: 'app-monster-card-reference',
  imports: [],
  templateUrl: './monster-card-reference.html',
  styleUrl: './monster-card-reference.scss'
})
export class MonsterCardReference {
  _reference?: string;

  monster?: Monster;

  @Input() set reference(value: string) { 
    this._reference = value;
    this.loadReference();
  }
  constructor(private monstersService: MonstersService) {

  }
  ngOnInit(		) {
    this.loadReference();
  }

  loadReference() { 
    if (this._reference) {
      this.monstersService.getMonsterByReference(this._reference!).subscribe(response => {
        this.monster = response;
      });

    } else {
      this.monster = undefined;
    }
  }

}
