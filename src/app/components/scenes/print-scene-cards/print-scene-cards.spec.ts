import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSceneCards } from './print-scene-cards';

describe('PrintSceneCards', () => {
  let component: PrintSceneCards;
  let fixture: ComponentFixture<PrintSceneCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintSceneCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintSceneCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
