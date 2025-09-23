import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thstat } from './thstat';

describe('Thstat', () => {
  let component: Thstat;
  let fixture: ComponentFixture<Thstat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thstat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thstat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
