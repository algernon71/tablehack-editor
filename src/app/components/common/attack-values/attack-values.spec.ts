import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackValues } from './attack-values';

describe('AttackValues', () => {
  let component: AttackValues;
  let fixture: ComponentFixture<AttackValues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttackValues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackValues);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
