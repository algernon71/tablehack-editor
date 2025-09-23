import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thstat',
  imports: [],
  templateUrl: './thstat.html',
  styleUrl: './thstat.scss'
})
export class Thstat {
  @Input() 
  stat = 'STY';

}
