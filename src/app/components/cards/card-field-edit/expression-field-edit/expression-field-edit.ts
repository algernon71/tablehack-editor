import { Component, Input, model, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Expressionview } from 'src/app/common/expressionview/expressionview';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-expression-field-edit',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, Expressionview],
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
