import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCardEntry } from './view-card-entry';

describe('ViewCardEntry', () => {
  let component: ViewCardEntry;
  let fixture: ComponentFixture<ViewCardEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCardEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCardEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
