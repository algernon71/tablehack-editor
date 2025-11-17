import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alertness-token',
  imports: [],
  templateUrl: './alertness-token.svg',
  styleUrl: './alertness-token.scss'
})
export class AlertnessToken {
  @Input()
  value?: string;

  @Input()
  width = "25mm";
  @Input()
  height = "25mm";
}
