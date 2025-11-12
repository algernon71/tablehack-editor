import { Routes } from '@angular/router';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { ResourceList } from './components/resources/resource-list/resource-list';
import { DesignerComponent } from './components/designer/designer-component/designer-component';
import { CardList } from './components/cards/card-list/card-list';
import { EditCard } from './components/cards/edit-card/edit-card';
import { DeckList } from './components/decks/deck-list/deck-list';
import { DeckPrint } from './print/deck-print/deck-print';
import { EditDeck } from './components/decks/edit-deck/edit-deck';
import { TopBar } from './components/top-bar/top-bar';
import { PrintMonsterCards } from './components/monsters/print-monster-cards/print-monster-cards';
import { PrintCharacterCards } from './components/characters/print-character-cards/print-character-cards';
import { EditStandardActions } from './components/characters/edit-standard-actions/edit-standard-actions';
import { EntityManager } from './components/entity/entity-manager/entity-manager';

export const routes: Routes = [
	{
		path: 'designer',
		component: DesignerComponent,
		children: [
			{
				path: 'resources',
				component: ResourceList,
				children: [
				]
			},
		]
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

				]
			},
			{
				path: 'decks',
				component: DeckList,
				children: [
				]
			},
			{
				path: 'resources',
				component: ResourceList,
				children: [
				]
			},
			{
				path: 'decks/edit/:id',
				component: EditDeck
			},
			{ path: 'decks/add', component: EditDeck }
		]
	},
	{
		path: 'print/decks/:id',
		component: DeckPrint
	},
	{
		path: 'print/monsters',
		component: PrintMonsterCards
	},
	{
		path: 'print/chars',
		component: PrintCharacterCards
	},
	{
		path: 'entities',
		component: TopBar,
		children: [
			{
				path: ':type',
				component: EntityManager,
				children: [
				]
			},
			{
				path: ':type/:id',
				component: EntityManager,
				children: [
				]
			},

		]
	},


	{
		path: '',
		redirectTo: 'entities/monsters',
		pathMatch: "full"
	},

];
