import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, RouterOutlet } from '@angular/router';

export class TopBarItem {
  label!: string;
  path?: string;
}

@Component({
  selector: 'app-top-bar',
  imports: [MatTabsModule, RouterOutlet, RouterModule],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss'
})
export class TopBar {

  items: TopBarItem[] = [
    {
      label: "Monsters", 
      path: "monsters"
    },
    {
      label: "Encounters", 
      path: "encounters"
    },
    {
      label: "Events", 
      path: "events"
    },
    {
      label: "Loot", 
      path: "loot"
    },
  ];
  links = ["/monsters", "/events"];
  activeLink = "/monsters";

  activeItem?: TopBarItem;

  constructor() { 
  }
  ngOnInit() { 

  }
}
