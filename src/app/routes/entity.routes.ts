import { Routes } from '@angular/router';
import { TopBar } from '../components/top-bar/top-bar';
import { EntityManager } from '../components/entity/entity-manager/entity-manager';

export const entityRoutes: Routes = [
  {
    path: 'entities',
    component: TopBar,
    children: [
      {
        path: ':type',
        component: EntityManager,
        children: [],
      },
      {
        path: ':type/:id',
        component: EntityManager,
        children: [],
      },
    ],
  },
];

