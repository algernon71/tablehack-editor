import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCardAttributes } from './edit-card-attributes';

describe('EditCardAttributes', () => {
  let component: EditCardAttributes;
  let fixture: ComponentFixture<EditCardAttributes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCardAttributes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCardAttributes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
