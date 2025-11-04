import { Routes } from '@angular/router';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { ResourceList } from './components/resources/resource-list/resource-list';
import { DesignerComponent } from './components/designer/designer-component/designer-component';
import { CardList } from './components/cards/card-list/card-list';
import { EditCard } from './components/cards/edit-card/edit-card';
import { DeckList } from './components/decks/deck-list/deck-list';
import { DeckPrint } from './print/deck-print/deck-print';
import { EditDeck } from './components/decks/edit-deck/edit-deck';
import { Monsters } from './components/monsters/monsters/monsters';
import { TopBar } from './components/top-bar/top-bar';
import { EventsManager } from './components/events/events-manager/events-manager';
import { LootManager } from './components/loot/loot-manager/loot-manager';
import { EncounterManager } from './components/encounters/encounter-manager/encounter-manager';
import { PrintMonsterCards } from './components/monsters/print-monster-cards/print-monster-cards';
import { CharactersManager } from './components/characters/characters-manager/characters-manager';
import { PrintCharacterCards } from './components/characters/print-character-cards/print-character-cards';

export const routes: Routes = [
	{
		path: 'monsters',
		component: Monsters
	},
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
		path: 'main',
		component: TopBar,
		children: [
			{
				path: 'characters',
				component: CharactersManager,
				children: [
				]
			},
			{
				path: 'monsters',
				component: Monsters,
				children: [
				]
			},
			{
				path: 'encounters',
				component: EncounterManager,
				children: [
				]
			},
			{
				path: 'events',
				component: EventsManager,
				children: [
				]
			},
			{
				path: 'loot',
				component: LootManager,
				children: [
				]
			},
		]
	},
	{
		path: '',
		redirectTo: 'main',
		pathMatch: "full"
	},

];
