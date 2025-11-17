import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expressionview } from './expressionview';

describe('Expressionview', () => {
  let component: Expressionview;
  let fixture: ComponentFixture<Expressionview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expressionview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expressionview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
