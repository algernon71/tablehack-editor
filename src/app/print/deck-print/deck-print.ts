import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewCard } from 'src/app/components/cards/view-card/view-card';
import { Card, Cards, CardType } from 'src/app/services/cards';
import { Deck, DeckEntry, Decks } from 'src/app/services/decks';

export class PrintPage {
  page = 0;
  backPage = false;
  grid!: CardPrintData[][];
  cardCount = 0;
}

export class CardPrintData {
  card!: Card;
}


@Component({
  selector: 'app-deck-print',
  imports: [ViewCard],
  templateUrl: './deck-print.html',
  styleUrl: './deck-print.scss'
})
export class DeckPrint {
  cardType?: CardType;
  
  doubleSided = true;

  fetchedCard$!: Observable<any>;

  deck?: Deck;

  pages: PrintPage[] = [];
  cards?: Card[];
  currentPage = 0;
  currentRow = 0;
  currentColumn = 0;
  flipPage = false;
  footers = true; 
  rowsPerPage = 2;
  columnsPerPage = 5;
  
  frontTopPad = 14;
  frontLeftPad = 3;

  constructor(
    private decksService: Decks,
    private cardsService: Cards,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.info('param value:', params);
      const id = params.get('id');
      console.info('deckId:' + id);
      if (id && id != 'add') {
        this.loadDeck(id);
      }
    });
  }

  loadDeck(deckId: string) {
    this.decksService.getDeck(deckId).subscribe(response => {
      this.deck = response;
      this.cardType = this.cardsService.getCardType(this.deck!.type!);
      if (this.cardType?.size == 'large') {
        this.footers = false;
      }
      this.cardsService.getCards(this.deck!.type!).subscribe(response => {
        this.cards = response;
        this.preparePrintPages();
      });
    });
    
    
  }

  preparePrintPages() {
    let cardPrintList: Card[] = [];
    console.info('preparePrintPages, deck:', this.deck);
    console.info('preparePrintPages, card type:', this.cardType);

	switch (this.cardType?.size ) {
    case 'small':
		this.rowsPerPage = 2;
		this.columnsPerPage = 5;
		this.frontTopPad = 2;
		this.frontLeftPad = 0;
		this.doubleSided = true;
      break;
    case 'large':
		this.rowsPerPage = 1;
		this.columnsPerPage = 1;
		this.frontTopPad = 0;
		this.frontLeftPad = 0;
		this.doubleSided = false;
      break;
  }
    this.deck?.entries.forEach(entry => {
      const card = this.findCard(entry);
      for (let i = 0; i < entry.count; ++i) {
        cardPrintList.push(card!);

      }
    });

    console.info('deck:', this.deck);
    console.info('printList:', cardPrintList);

    cardPrintList.forEach(card => {
        this.addCardToPrint(card);
    });
    console.info('pages:', this.pages);
    this.pages = this.pages.filter(page => page.grid.length > 0);
  }

  addCardToPrint(card: Card) {
    if (this.pages.length <= this.currentPage) {
      this.addPage();
    }
    

    let page = this.pages[this.currentPage];
    if (page.grid.length <= this.currentRow) {
      page.grid.push([]);
    }

    page.grid[this.currentRow].push({ card: card });
    page.cardCount++;
    this.currentColumn++;
    if (this.currentColumn >= this.columnsPerPage) {
      this.currentColumn = 0;
      this.currentRow++;
      if (this.currentRow >= this.rowsPerPage) {
        this.currentRow = 0;
        this.currentPage++;
        this.addPage();
      }
             
    }
    
    
  }
  addPage() {
      let newPage: PrintPage = {
        page: this.currentPage,
        backPage: this.flipPage,
        grid: [],
        cardCount: 0
      };
      this.flipPage = !this.flipPage;
      this.pages.push(newPage);
    
  }
  findCard(entry: DeckEntry): Card | undefined {
    return this.cards!.find(card => card.id == entry.cardId);
  }




}
