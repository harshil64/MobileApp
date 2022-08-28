import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMobileListComponent } from './favorite-mobile-list.component';

describe('FavoriteMobileListComponent', () => {
  let component: FavoriteMobileListComponent;
  let fixture: ComponentFixture<FavoriteMobileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteMobileListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteMobileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
