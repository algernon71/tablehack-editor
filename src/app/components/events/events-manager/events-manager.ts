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
      typeId: '1',
      title: 'Nothing'
    },
    {
      typeId: '1',
      title: 'Goblin patroll'
    },
    {
      typeId: '1',
      title: 'Stray goblin'
    },
    {
      typeId: '1',
      title: 'Goblin party!'
    },
    {
      typeId: '1',
      title: 'Goblin party!'
    },
    {
      typeId: '1',
      title: 'Goblin party!'
    },
    {
      typeId: '1',
      title: 'Goblin party!'
    },
  ];
}
