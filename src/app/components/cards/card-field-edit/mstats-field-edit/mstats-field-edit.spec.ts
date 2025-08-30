import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MstatsFieldEdit } from './mstats-field-edit';

describe('MstatsFieldEdit', () => {
  let component: MstatsFieldEdit;
  let fixture: ComponentFixture<MstatsFieldEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MstatsFieldEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MstatsFieldEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
