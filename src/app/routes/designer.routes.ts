import { Routes } from '@angular/router';
import { DesignerComponent } from '../components/designer/designer-component/designer-component';
import { ResourceList } from '../components/resources/resource-list/resource-list';
import { CardList } from '../components/cards/card-list/card-list';
import { EditCard } from '../components/cards/edit-card/edit-card';
import { DeckList } from '../components/decks/deck-list/deck-list';
import { EditDeck } from '../components/decks/edit-deck/edit-deck';

export const designerRoutes: Routes = [
  {
    path: 'designer',
    component: DesignerComponent,
    children: [
      {
        path: 'resources',
        component: ResourceList,
        children: [],
      },
    ],
  },
  {
    path: 'designer/:type',
    component: DesignerComponent,
    children: [
      {
        path: 'cards',
        component: CardList,
        children: [
          { path: 'edit/:id', component: EditCard },
          { path: 'add', component: EditCard },
        ],
      },
      {
        path: 'decks',
        component: DeckList,
        children: [],
      },
      {
        path: 'resources',
        component: ResourceList,
        children: [],
      },
      {
        path: 'decks/edit/:id',
        component: EditDeck,
      },
      { path: 'decks/add', component: EditDeck },
    ],
  },
];

