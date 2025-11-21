import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-stat',
  imports: [],
  templateUrl: './card-stat.html',
  styleUrl: './card-stat.scss'
})
export class CardStat {
  @Input()
  icon!: string;

  @Input()
  value!: any;

  url() {
    return '/public/images/symbols/' + this.icon;
  }

}
