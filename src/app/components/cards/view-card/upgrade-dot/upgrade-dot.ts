import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upgrade-dot',
  imports: [],
  templateUrl: './upgrade-dot.html',
  styleUrl: './upgrade-dot.scss'
})
export class UpgradeDot {
  @Input()
  cost?: number;
    
}
