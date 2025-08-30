import { Component, Input } from '@angular/core';
import { Card, CardTypeField } from 'src/app/services/cards';

@Component({
  selector: 'app-attack-field-edit',
  imports: [],
  templateUrl: './attack-field-edit.html',
  styleUrl: './attack-field-edit.scss'
})
export class AttackFieldEdit {
	@Input()
	card?: Card;

	@Input()
	field?: CardTypeField;
	@Input()
	attack: any;


	ngOnInit() {
		if (!this.attack!.name) {
			this.attack.name = '';
			this.attack.value = 1;
			this.attack.range = 0;
			this.attack.attributes = [];

		}
		console.info('card edit dialog init, value:', this.attack);
	}

}
