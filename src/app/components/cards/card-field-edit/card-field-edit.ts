import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Card, CardTypeField } from 'src/app/services/cards';
import { ResourceSelect } from '../../resources/resource-select/resource-select';
import { ActionFieldEdit } from './action-field-edit/action-field-edit';
import { AttackFieldEdit } from './attack-field-edit/attack-field-edit';
import { MatInputModule } from '@angular/material/input';
import { UpgradeableFieldEdit } from './upgradeable-field-edit/upgradeable-field-edit';
import { MstatsFieldEdit } from './mstats-field-edit/mstats-field-edit';
import { ExpressionFieldEdit } from './expression-field-edit/expression-field-edit';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-field-edit',
  imports: [
	MatFormFieldModule, 
	MatCheckboxModule,
	MatButtonModule,
	ResourceSelect, 
	FormsModule, 
	ReactiveFormsModule, 
	ActionFieldEdit, 
	UpgradeableFieldEdit, 
	MstatsFieldEdit, 
	ExpressionFieldEdit,  
	AttackFieldEdit, 
	MatInputModule],

  templateUrl: './card-field-edit.html',
  styleUrl: './card-field-edit.scss'
})
export class CardFieldEdit {
	@Input()
	card?: Card;
	@Input()
	field?: CardTypeField;

	fieldId?: string;
	fieldType?: string;
	value?: any = '';

	@Output()
	cardUpdated = new EventEmitter<Card>();
	control = new FormControl('<H1>This is neat</H1>');

	constructor(private injector: Injector) {}

  	ngOnInit() {
    // 	const element = createCustomElement(ThlogoComponent, { injector: this.injector });
//    	customElements.define('app-alert', element);
		this.fieldId = this.field!.id;
		this.fieldType = this.field!.type;
		this.value = this.card!.data[this.fieldId];
		console.info('CardFieldEditComponent.ngOnInit() field id:', this.field!.id);
		console.info('CardFieldEditComponent.ngOnInit() value:', this.value);
	}

	valueChanged(value: any) {
		console.info('field value change:', value);
		this.card!.data[this.field!.id] = value;
		console.info('card:', this.card);
	}

	addFieldRow(value: any) {
		
		if (!this.value) {
			this.card!.data[this.fieldId!] = [];
			this.value = this.card!.data[this.fieldId!];
		}
		this.value.push(value);
		console.info('addFieldRow, value:', value);
		console.info('addFieldRow, field value:', this.value);

	}
	removeFieldRow(fieldList: any, value: any) {
		let idx = -1;
		for (let i = 0; i < fieldList.length; ++i) {
			if (fieldList[i] == value) {
				idx = i;
				break;
			}
		}

		if (idx >= 0) {
			fieldList.splice(idx, 1);
		}

	}
}
