import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Card, CardTypeField } from 'src/app/services/cards';

@Component({
  selector: 'app-mstats-field-edit',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './mstats-field-edit.html',
  styleUrl: './mstats-field-edit.scss'
})
export class MstatsFieldEdit {
	@Input()
	card?: Card;
	@Input()
	field?: CardTypeField;

	@Input()
	mstats: any;


	ngOnInit() {
		if (!this.card!.data[this.field!.id]) {
			this.card!.data[this.field!.id] = {};
		}
		this.mstats = this.card!.data[this.field!.id];
		
		if (!(this.mstats!.health)) {
			this.mstats.health = 1;
			this.mstats.defence = 0;
			this.mstats.difficulty = 1;
			this.mstats.resistances = {
				poison: 0,
				fire: 0,
				cold: 0,
				magic: 0,
				nmagic: 0
			};
		}
	}

	typeChanged(action: any, value: any, event: any) {
		if (event.isUserInput) {
			action.type = value;
		}
	}
}
