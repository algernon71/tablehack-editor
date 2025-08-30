import { Component, Input } from '@angular/core';
import { Expressionview } from 'src/app/common/expressionview/expressionview';
import { Card, CardType, CardTypeEntry } from 'src/app/services/cards';
import { Deck } from 'src/app/services/decks';
import { ViewCardStat } from '../view-card-stat/view-card-stat';
import { LevelUpgradeEntry } from '../level-upgrade-entry/level-upgrade-entry';

@Component({
  selector: 'app-view-card-entry',
  imports: [Expressionview, ViewCardStat, LevelUpgradeEntry],
  templateUrl: './view-card-entry.html',
  styleUrl: './view-card-entry.scss'
})
export class ViewCardEntry {
	@Input()
	card?: Card;

	@Input()
	deck?: Deck;

	@Input()
	type?: CardType;

	@Input()
	entry?: CardTypeEntry;

	
	ngOnInit() {
	}
}
