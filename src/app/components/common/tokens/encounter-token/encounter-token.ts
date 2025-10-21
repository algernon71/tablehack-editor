import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-encounter-token',
  imports: [],
  templateUrl: './encounter-token.svg',
  styleUrl: './encounter-token.scss'
})
export class EncounterToken {
  @Input()
  value?: string;

  width = "25mm";
  height = "25mm";


}
