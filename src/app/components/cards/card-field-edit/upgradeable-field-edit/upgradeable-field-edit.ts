import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Card, CardTypeField, StatValue } from 'src/app/services/cards';

@Component({
  selector: 'app-upgradeable-stat-field',
  imports: [FormsModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './upgradeable-field-edit.html',
  styleUrl: './upgradeable-field-edit.scss'
})
export class UpgradeableFieldEdit {

	@Input()
	card?: Card;

	@Input()
	field?: CardTypeField;

	@Input()
	statName?: string;

	@Input()
	statId?: string;

	@Input()
	defaultValue = 2;

	value?: string;

	rawValue?: StatValue;

	@Input()
	action: any;

	ngOnInit() {
		let statsValue = this.card!.data![this.field?.id!];
		if (!statsValue) {
			statsValue = {};
			this.card!.data![this.field?.id!] = statsValue;
		}
		this.rawValue = statsValue[this.statId!];
		if (!this.rawValue) {
			this.rawValue = {
				name: this.statName!,
				upgradeCosts: []
			};

			for (let i = 0; i < this.defaultValue; ++i) {
				this.rawValue.upgradeCosts.push(0);
			}
			statsValue[this.statId!] = this.rawValue;
		}

		this.renderValue();
	}



	valueChanged(event: any) {
		this.parseValue();
	}

	parseValue() {
		const parsed = this.value?.trim().split(" ");
		if (parsed?.length! > 0) {
			this.rawValue!.upgradeCosts = [];
			parsed?.forEach(cost => {
				this.rawValue!.upgradeCosts.push(Number(cost));
			});
			console.info('value changed', this.rawValue);
		}

	}

	renderValue() {
		this.value = '';
		this.rawValue!.upgradeCosts.forEach(cost => {
			this.value += cost + ' ';
		});
	}

}
