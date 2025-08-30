import { Component } from '@angular/core';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, PRIMARY_OUTLET, Router, RouterModule, RouterOutlet, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { Cards, CardType } from 'src/app/services/cards';
@Component({
  selector: 'app-designer-component',
  imports: [MatSidenavModule, MatToolbarModule , MatTabsModule, MatListModule, RouterModule],
  templateUrl: './designer-component.html',
  styleUrl: './designer-component.scss'
})
export class DesignerComponent {
	title = 'tablehack-designer';
	cardTypes?: CardType[];

	cardTypeId?: string | null;
	editorId = '/decks';
	editorTypes: any[];
	activeLinkIndex = -1;
	constructor(public cardsService: Cards, private router: Router, private route: ActivatedRoute,) {
		this.editorTypes = [
			{
				label: 'Kortlekar',
				link: 'decks',
				index: 1
			},
			/*
			{
				label: 'Kort',
				link: 'cards',
				index: 0
			},
			*/ 
		];
	}
	ngOnInit(): void {
		this.reload();
		this.route.paramMap.subscribe(params => {
			this.cardTypeId = params.get('cardType');
//			console.info('cardTypeId:', this.cardTypeId);
		});


		this.router.events.subscribe((res) => {
//			console.info('router url:', this.router.url);
			const tree: UrlTree =
				this.router.parseUrl(this.router.url);
			const f = tree.fragment; // return 'fragment'
			const q = tree.queryParams; // returns {debug: 'true'}
			const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
			const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'			this.activeLinkIndex = this.editorTypes.indexOf(this.editorTypes.find(tab => tab.link === '.' + this.router.url));
			if (s.length > 2) {
				this.editorId = '/' + s[2].path;
			} else {
        this.editorId = '/decks';
      }
		});
	}

	reload() {
		this.cardsService.getCardTypes().subscribe(response => {
			this.cardTypes = response;
		});

	}

}
