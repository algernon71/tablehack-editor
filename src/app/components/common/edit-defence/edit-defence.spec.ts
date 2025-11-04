import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDefence } from './edit-defence';

describe('EditDefence', () => {
  let component: EditDefence;
  let fixture: ComponentFixture<EditDefence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDefence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDefence);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
