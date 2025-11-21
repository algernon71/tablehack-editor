import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLocationEvents } from './edit-location-events';

describe('EditLocationEvents', () => {
  let component: EditLocationEvents;
  let fixture: ComponentFixture<EditLocationEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLocationEvents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLocationEvents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
