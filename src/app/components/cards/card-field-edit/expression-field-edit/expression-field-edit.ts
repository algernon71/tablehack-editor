import { Component, Input, model, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-expression-field-edit',
  imports: [],
  templateUrl: './expression-field-edit.html',
  styleUrl: './expression-field-edit.scss'
})
export class ExpressionFieldEdit {
  expression = model<string>("");
	@Input()
	name?: string;


	ngOnChanges(event: any) {
	}

}
