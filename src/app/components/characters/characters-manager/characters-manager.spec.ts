import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersManager } from './characters-manager';

describe('CharactersManager', () => {
  let component: CharactersManager;
  let fixture: ComponentFixture<CharactersManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
