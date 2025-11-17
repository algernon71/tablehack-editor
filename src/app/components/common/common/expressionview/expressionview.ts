import { Component, Input } from '@angular/core';
import { Resources } from 'src/app/services/resources';
export class ExpressionElement {
	type?: string;
	subtype?: string;
}
@Component({
  selector: 'app-expressionview',
  imports: [],
  templateUrl: './expressionview.html',
  styleUrl: './expressionview.scss'
})
export class Expressionview {
 @Input()
	expression?: string;

	parsedElements?: ExpressionElement[];
	expressionHtml = "";

	constructor(
		public resourceService: Resources) {
	}

	ngOnChanges(event: any) {
		// this.buildExpression();
		this.parseExpression();
		this.renderElements();
	}

	buildExpression() {
		this.expressionHtml = '';
		for (let i = 0; i < this.expression!.length; ++i) {
			const ch = this.expression![i];
			switch (ch) {
				case 'D':
					this.expressionHtml += '<img class="expression-symbol" src="/public/images/symbols/attack_dice.svg">';
					break;

				default:
					this.expressionHtml += ch;
			}
		}
	}

	parseExpression() {
		this.parsedElements = [];

		let currentElement: ExpressionElement = {
			type: 'text',
			subtype: ''
		};
		for (let i = 0; i < this.expression!.length; ++i) {
			const ch = this.expression![i];
			switch (ch) {
				case '(':
					this.addElement(currentElement);
					currentElement = {
						type: 'dice',
						subtype: ''
					};
					break;
				case '[':
					this.addElement(currentElement);
					currentElement = {
						type: 'stat',
						subtype: ''
					};
					break;
				case '{':
					this.addElement(currentElement);
					currentElement = {
						type: 'large-stat',
						subtype: ''
					};
					break;
				case ')':
				case ']':
				case '}':
					this.addElement(currentElement);
					currentElement = {
						type: 'text',
						subtype: ''
					};
					break;

				case ' ':
					if (currentElement.type == 'text') {
					currentElement.subtype += '&nbsp;';
						
					}
					break;
				default:
					currentElement.subtype += ch;
			}
		}
		this.addElement(currentElement);
		// console.info('parsedElements:', this.parsedElements);
	}

	renderElements() {
		this.expressionHtml = '';
		this.parsedElements?.forEach(element => {
			this.renderElement(element);
		});
	};
	renderElement(element: ExpressionElement) {
		switch (element!.type) {
			case 'text':
				this.expressionHtml += element.subtype;
				break;
			case 'dice':
				this.renderDice(element.subtype!);
				break;
			case 'stat':
				this.renderStat(element.subtype!, 'expression-symbol');
				break;
			case 'large-stat':
				this.renderStat(element.subtype!, 'expression-symbol-large');
				break;
		}
	};
	renderDice(type: string) {
		this.expressionHtml += '<img class="expression-symbol" src="/public/images/symbols/' + this.resourceService.getDiceIcon(type) + ' ">';
	}
	renderStat(type: string, cl: string) {
		this.expressionHtml += '<img class="' + cl+ '" src="/public/images/symbols/' + this.resourceService.getStatIcon(type) + ' ">';
	}

	addElement(element: ExpressionElement) {
		if (element.subtype!.length > 0) {
			this.parsedElements!.push(element);
		}
	}
}
