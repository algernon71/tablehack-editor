import { Component } from '@angular/core';
export class Level {
  nr!: number;
  xp!: number;
  up!: any;
}
@Component({
  selector: 'app-level-upgrade-entry',
  imports: [],
  templateUrl: './level-upgrade-entry.html',
  styleUrl: './level-upgrade-entry.scss'
})
export class LevelUpgradeEntry {
	levels: Level[] = [
    {
      nr: 1,
      xp: 0,
      up: ''
    },
    {
      nr: 2,
      xp: 5,
      up: 2
    },
    {
      nr: 3,
      xp: 10,
      up: 2
    },
    {
      nr: 4,
      xp: 20,
      up: 3
    },
    {
      nr: 5,
      xp: 40,
      up: 3
    },
    {
      nr: 6,
      xp: 100,
      up: 4
    },
    {
      nr: 7,
      xp: 200,
      up: 4
    },
    {
      nr: 8,
      xp: 400,
      up: 5
    },
    {
      nr: 9,
      xp: 800,
      up: 5
    },
  ];
}
