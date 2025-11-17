import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loot-token',
  imports: [],
  templateUrl: './loot-token.svg',
  styleUrl: './loot-token.scss'
})
export class LootToken {
  @Input()
  value?: string;

  @Input()
  width = "15mm";
  @Input()
  height = "15mm";
}
