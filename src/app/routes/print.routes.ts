import { Routes } from '@angular/router';
import { DeckPrint } from '../print/deck-print/deck-print';
import { PrintMonsterCards } from '../components/monsters/print-monster-cards/print-monster-cards';
import { PrintCharacterCards } from '../components/characters/print-character-cards/print-character-cards';
import { PrintSceneCards } from '../components/scenes/print-scene-cards/print-scene-cards';
import { PrintEquipmentCards } from '../components/equipment/print-equipment-cards/print-equipment-cards';
import { PrintEntities } from '../components/entity/print-entities/print-entities';

export const printRoutes: Routes = [
  {
    path: 'print/decks/:id',
    component: DeckPrint,
  },
  {
    path: 'print/monsters',
    component: PrintMonsterCards,
  },
  {
    path: 'print/characters',
    component: PrintCharacterCards,
  },
  {
    path: 'print/scenes',
    component: PrintSceneCards,
  },
  {
    path: 'print/items',
    component: PrintEquipmentCards,
  },
  {
    path: 'print-entities/:entityId',
    component: PrintEntities,
  },
];

