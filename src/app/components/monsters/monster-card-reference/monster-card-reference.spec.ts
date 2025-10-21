import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterCardReference } from './monster-card-reference';

describe('MonsterCardReference', () => {
  let component: MonsterCardReference;
  let fixture: ComponentFixture<MonsterCardReference>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterCardReference]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterCardReference);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
