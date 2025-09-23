import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thlogo } from './thlogo';

describe('Thlogo', () => {
  let component: Thlogo;
  let fixture: ComponentFixture<Thlogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thlogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thlogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
