import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCardListComponent } from './tour-card-list.component';

describe('TourCardListComponent', () => {
  let component: TourCardListComponent;
  let fixture: ComponentFixture<TourCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
