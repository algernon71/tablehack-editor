import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-range-symbol',
  imports: [],
  templateUrl: './range-symbol.svg',
  styleUrl: './range-symbol.scss'
})
export class RangeSymbol {

  @Input()
  value!: string;

  width = "15mm";
  height = "10mm";
}
