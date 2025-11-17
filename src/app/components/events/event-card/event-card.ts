import { Component } from '@angular/core';
import { Event } from 'src/app/services/entities';

@Component({
  selector: 'app-event-card',
  imports: [],
  templateUrl: './event-card.html',
  styleUrl: './event-card.scss'
})
export class EventCard {
  event?: Event;
}
