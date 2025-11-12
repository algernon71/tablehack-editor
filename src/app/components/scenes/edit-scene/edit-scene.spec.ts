import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScene } from './edit-scene';

describe('EditScene', () => {
  let component: EditScene;
  let fixture: ComponentFixture<EditScene>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditScene]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditScene);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
