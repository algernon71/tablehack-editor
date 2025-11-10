import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityManager } from './entity-manager';

describe('EntityManager', () => {
  let component: EntityManager;
  let fixture: ComponentFixture<EntityManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
