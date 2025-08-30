import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeDot } from './upgrade-dot';

describe('UpgradeDot', () => {
  let component: UpgradeDot;
  let fixture: ComponentFixture<UpgradeDot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpgradeDot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgradeDot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
