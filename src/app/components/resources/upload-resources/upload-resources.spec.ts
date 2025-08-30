import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadResources } from './upload-resources';

describe('UploadResources', () => {
  let component: UploadResources;
  let fixture: ComponentFixture<UploadResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadResources]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadResources);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
