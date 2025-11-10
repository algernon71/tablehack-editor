import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EntityManager } from '../entity/entity-manager/entity-manager';
import { EntityService } from 'src/app/services/entity-service';
import { EntityInfo } from 'src/app/services/entity';

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
      label: "Characters",
      path: "characters"
    },
    {
      label: "Standard actions",
      path: "actions"
    },
    {
      label: "Equipment",
      path: "equipment"
    },
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

  entities?: EntityInfo[];
  activeItem?: TopBarItem;

  activePath?: string;

  constructor(private entityService: EntityService) {
  }

  ngOnInit() {
    this.entities = this.entityService.getEntities();
  }

  onActivate(em: EntityManager) {
    console.info('onActivate', em.dataSource?.getTypeId());
    this.activePath = em.dataSource?.getTypeId();
  }
}
