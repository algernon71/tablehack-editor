import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenSymbol } from './token-symbol';

describe('TokenSymbol', () => {
  let component: TokenSymbol;
  let fixture: ComponentFixture<TokenSymbol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenSymbol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenSymbol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
