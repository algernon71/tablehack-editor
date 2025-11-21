import { Component, Input } from '@angular/core';
import { LocationEvent } from 'src/app/entities';
import { EventToken } from "../../common/tokens/event-token/event-token";

@Component({
  selector: 'app-location-event-card',
  imports: [EventToken],
  templateUrl: './location-event-card.html',
  styleUrl: './location-event-card.scss'
})
export class LocationEventCard {
  @Input()
  print = true;

  @Input()
  front = true;

  @Input()
  back = true;

  @Input()
  locationEvent!: LocationEvent;
}
