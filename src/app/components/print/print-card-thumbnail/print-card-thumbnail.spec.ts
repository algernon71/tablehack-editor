import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCardThumbnail } from './print-card-thumbnail';

describe('PrintCardThumbnail', () => {
  let component: PrintCardThumbnail;
  let fixture: ComponentFixture<PrintCardThumbnail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintCardThumbnail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintCardThumbnail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
