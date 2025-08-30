import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Card, CardTypeField } from 'src/app/services/cards';
import { ExpressionFieldEdit } from '../expression-field-edit/expression-field-edit';
import { DeckSelect } from 'src/app/components/decks/deck-select/deck-select';

@Component({
  selector: 'app-action-field-edit',
  imports: [MatFormFieldModule, MatSelectModule, ExpressionFieldEdit, DeckSelect],
  templateUrl: './action-field-edit.html',
  styleUrl: './action-field-edit.scss'
})
export class ActionFieldEdit {
	@Input()
	card?: Card;
	@Input()
	field?: CardTypeField;

	@Input()
	action: any;


	actionTypes = [
		{
			id: 'move',
			name: 'Förflyttning',
			valueName: 'Avstånd',
			valueType: 'text'
		},
		{
			id: 'card',
			name: 'Dra kort',
			valueName: 'Kortlek',
			valueType: 'deck-reference'
		},
		{
			id: 'heal',
			name: 'Hela',
			valueName: 'KP',
			valueType: 'text'
		},
		{
			id: 'mana',
			name: 'Mana',
			valueName: 'mana',
			valueType: 'text'
		},
		{
			id: 'poison',
			name: 'Gift',
			valueName: 'styrka',
			valueType: 'text'
		}
	];

	moveTypes = [
		{
			id: 'move',
			name: 'Vanlig'
		},
		{
			id: 'fly',
			name: 'Flyger'
		},
		{
			id: 'teleport',
			name: 'Teleporterar'
		},
		];
	targetTypes = [
		{
			id: 'A',
			name: 'Närmaste fiende'
		},
		{
			id: 'X',
			name: 'Fiende längst bort'
		},
		];
		
	ngOnInit() {
		if (!(this.action!.type)) {
			this.action.type = this.actionTypes[0];
			this.action.value = '1 x SMI';
		}
	}

	typeChanged(action: any, value: any, event: any) {
		if (event.isUserInput) {
			action.type = value;
		}
	}

	moveTypeChanged(action: any, value: any, event: any) {
		if (event.isUserInput) {
			action.moveType = value;
		}
	}
}
