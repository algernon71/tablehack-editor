import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-token',
  imports: [],
  templateUrl: './time-token.svg',
  styleUrl: './time-token.scss'
})
export class TimeToken {
  @Input()
  value?: string;

  @Input()
  width = "20mm";
  @Input()
  height = "20mm";
}
