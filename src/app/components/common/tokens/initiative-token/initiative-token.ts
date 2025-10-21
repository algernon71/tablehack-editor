import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-initiative-token',
  imports: [],
  templateUrl: './initiative-token.svg',
  styleUrl: './initiative-token.scss'
})
export class InitiativeToken {
  @Input()
  value?: string;
  
  width = "25mm";
  height = "25mm";
}
