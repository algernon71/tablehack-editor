import { Component, Input } from '@angular/core';
import { GameEncounter } from 'src/app/services/encounter-service';
import { GameEvent } from 'src/app/services/events-service';
import { Monster, Action } from 'src/app/services/monsters';
import { PrintCard } from "../print-card/print-card";
import { Character, CharacterAction } from 'src/app/services/characters-service';
import { NgClass } from '@angular/common';


export class PrintPage {
  frontTopPad!: number;
  frontLeftPad!: number;
  frontRightPad!: number;
  backLeftPad!: number;
  backTopPad!: number;
  page = 0;
  largeCards!: boolean;
  grid!: CardPrintData[][];
  cardCount = 0;
  columns!: number;
  rows!: number;
}

export class CardPrintData {
  actorName?: string;
  actorReference?: string;
  largeCard? = false;
  monster?: Monster;
  action?: Action;
  encounter?: GameEncounter;
  event?: GameEvent;
  character?: Character;
  characterAction?: CharacterAction;

}


@Component({
  selector: 'app-print-cards',
  imports: [PrintCard, NgClass],
  templateUrl: './print-cards.html',
  styleUrl: './print-cards.scss'
})
export class PrintCards {
  @Input()
  cards!: CardPrintData[];

  @Input()
  cardSize = 'small';


  title?: string;
  pages: PrintPage[] = [];



  doubleSided = true;
  currentPage = 0;
  currentRow = 0;
  currentColumn = 0;
  footers = true;


  ngOnInit() {
    this.preparePrintPages();
  }


  preparePrintPages() {
    console.info('preparePrintPages, cards:', this.cards);


    this.cards.forEach(card => {
      this.addCardToPrint(card);
    });
    console.info('pages:', this.pages);
    this.pages = this.pages.filter(page => page.grid.length > 0);
  }

  addCardToPrint(card: CardPrintData) {

    const page = this.getCurrentPage(card);
    if (page.grid.length <= this.currentRow) {
      page.grid.push([]);
    }

    page.grid[this.currentRow].push(card);
    page.cardCount++;
    this.currentColumn++;
    if (this.currentColumn >= page.columns) {
      this.currentColumn = 0;
      this.currentRow++;
      if (this.currentRow >= page.rows) {
        this.currentRow = 0;
        this.currentPage++;
      }

    }
  }



  getColumnsPerPage(card: CardPrintData) {
    if (card.largeCard) {
      return 1;
    } else {
      return 5;
    }
  }
  getRowsPerPage(card: CardPrintData) {
    if (card.largeCard) {
      return 2;
    } else {
      return 2;
    }
  }

  getCurrentPage(card: CardPrintData) {
    console.info('getCurrentPage', card, this.pages, this.currentColumn, this.pages[this.currentPage]);
    const cardSizeChange = this.changeCardSize(card);
    if (cardSizeChange) {
      console.info('getCurrentPage() increment', cardSizeChange)
      this.currentPage++;
    }

    if (this.pages.length <= this.currentPage) {
      const newPage = this.createPage(card.largeCard!);
      this.pages.push(newPage);
      this.currentColumn = 0;
      this.currentRow = 0;
    }

    return this.pages[this.currentPage];
  }

  changeCardSize(card: CardPrintData): boolean {
    const currentPage = this.pages[this.currentPage];
    if (!currentPage) {
      return false;
    }
    const currentLarge = currentPage.largeCards;
    const cardLarge = card.largeCard! == true;
    console.info('changeCardSize()', currentLarge, cardLarge);
    return currentLarge != cardLarge;
  }
  createPage(largeCards: boolean): PrintPage {
    if (largeCards) {
      return {
        frontTopPad: 0,
        frontLeftPad: 0,
        frontRightPad: 0,
        backLeftPad: 2,
        backTopPad: 0,
        largeCards: true,
        page: this.currentPage,
        grid: [],
        cardCount: 0,
        rows: 2,
        columns: 1
      };
    }

    return {
      frontTopPad: 5,
      frontLeftPad: 3,
      frontRightPad: 0,
      backLeftPad: 3,
      backTopPad: 0,
      largeCards: false,
      page: this.currentPage,
      grid: [],
      cardCount: 0,
      rows: 2,
      columns: 5
    };



  }

}
