import { Component, Input } from '@angular/core';
import { CardPrintData } from '../print-cards/print-cards';
import { Monster } from 'src/app/services/monsters';
import { GameEncounter } from 'src/app/services/encounter-service';
import { PrintCard } from "../print-card/print-card";

@Component({
  selector: 'app-print-card-thumbnail',
  imports: [PrintCard],
  templateUrl: './print-card-thumbnail.html',
  styleUrl: './print-card-thumbnail.scss'
})
export class PrintCardThumbnail {
  @Input()
  label!: string;

  @Input()
  card: CardPrintData = new CardPrintData();

  justIcon = false;
  preview = false;
}
