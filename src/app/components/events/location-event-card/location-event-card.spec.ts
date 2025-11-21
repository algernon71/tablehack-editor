import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEventCard } from './location-event-card';

describe('LocationEventCard', () => {
  let component: LocationEventCard;
  let fixture: ComponentFixture<LocationEventCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationEventCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationEventCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
