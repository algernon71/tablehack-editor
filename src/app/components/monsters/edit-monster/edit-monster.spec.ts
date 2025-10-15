import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMonster } from './edit-monster';

describe('EditMonster', () => {
  let component: EditMonster;
  let fixture: ComponentFixture<EditMonster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMonster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMonster);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
