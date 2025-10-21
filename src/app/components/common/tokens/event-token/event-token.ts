import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-token',
  imports: [],
  templateUrl: './event-token.svg',
  styleUrl: './event-token.scss'
})
export class EventToken {
  @Input()
  value?: string;

  width = "20mm";
  height = "20mm";
}
