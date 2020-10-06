import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTilesComponent } from './navigation-tiles.component';

describe('NavigationTilesComponent', () => {
  let component: NavigationTilesComponent;
  let fixture: ComponentFixture<NavigationTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
