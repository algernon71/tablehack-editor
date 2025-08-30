import { Component, Input } from '@angular/core';
import { Card, CardTypeField, StatValue } from 'src/app/services/cards';
import { UpgradeDot } from '../upgrade-dot/upgrade-dot';

@Component({
  selector: 'app-view-card-stat',
  imports: [UpgradeDot],
  templateUrl: './view-card-stat.html',
  styleUrl: './view-card-stat.scss'
})
export class ViewCardStat {

	@Input()
	card?: Card;

	@Input()
	field?: CardTypeField;

	@Input()
	statName?: string;

	@Input()
	statIcon?: string;
	
	@Input()
	value?: StatValue;

}
