import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLoot } from './edit-loot';

describe('EditLoot', () => {
  let component: EditLoot;
  let fixture: ComponentFixture<EditLoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLoot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
