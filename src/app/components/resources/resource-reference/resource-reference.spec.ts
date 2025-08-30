import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceReference } from './resource-reference';

describe('ResourceReference', () => {
  let component: ResourceReference;
  let fixture: ComponentFixture<ResourceReference>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceReference]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceReference);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
