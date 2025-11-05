import { Component, Input } from '@angular/core';
import { Defence, DefenceType } from 'src/app/services/monsters';
import { DefenceValue } from "../defence-value/defence-value";

@Component({
  selector: 'app-defence-values',
  imports: [DefenceValue],
  templateUrl: './defence-values.html',
  styleUrl: './defence-values.scss'
})
export class DefenceValues {
  @Input()
  defence?: Defence;

  types?: DefenceType[];

  ngOnInit() {
    this.types = Defence.types;
  }

}
