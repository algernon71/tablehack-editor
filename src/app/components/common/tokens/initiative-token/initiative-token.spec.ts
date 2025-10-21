import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativeToken } from './initiative-token';

describe('InitiativeToken', () => {
  let component: InitiativeToken;
  let fixture: ComponentFixture<InitiativeToken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitiativeToken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiativeToken);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
