import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIconType } from './select-icon-type';

describe('SelectIconType', () => {
  let component: SelectIconType;
  let fixture: ComponentFixture<SelectIconType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectIconType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectIconType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
