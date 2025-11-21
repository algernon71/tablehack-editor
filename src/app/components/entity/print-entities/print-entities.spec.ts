import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintEntities } from './print-entities';

describe('PrintEntities', () => {
  let component: PrintEntities;
  let fixture: ComponentFixture<PrintEntities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintEntities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintEntities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
