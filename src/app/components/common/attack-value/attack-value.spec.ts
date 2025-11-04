import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackValue } from './attack-value';

describe('AttackValue', () => {
  let component: AttackValue;
  let fixture: ComponentFixture<AttackValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttackValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackValue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
