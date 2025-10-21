import { Component } from '@angular/core';
import { GameEvent } from 'src/app/services/events-service';

@Component({
  selector: 'app-events-manager',
  imports: [],
  templateUrl: './events-manager.html',
  styleUrl: './events-manager.scss'
})
export class EventsManager {
  events: GameEvent[] = [
    {
      tokenId: '1',
      title: 'Nothing'
    },
    {
      tokenId: '1',
      title: 'Goblin patroll'
    },
    {
      tokenId: '1',
      title: 'Stray goblin'
    },
    {
      tokenId: '1',
      title: 'Goblin party!'
    },
    {
      tokenId: '1',
      title: 'Goblin party!'
    },
    {
      tokenId: '1',
      title: 'Goblin party!'
    },
    {
      tokenId: '1',
      title: 'Goblin party!'
    },
  ];
}
