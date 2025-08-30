import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCardStat } from './view-card-stat';

describe('ViewCardStat', () => {
  let component: ViewCardStat;
  let fixture: ComponentFixture<ViewCardStat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCardStat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCardStat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
