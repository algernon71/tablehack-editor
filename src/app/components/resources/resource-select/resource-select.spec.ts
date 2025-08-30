import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSelect } from './resource-select';

describe('ResourceSelect', () => {
  let component: ResourceSelect;
  let fixture: ComponentFixture<ResourceSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
