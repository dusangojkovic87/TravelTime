import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTourPackagesListComponent } from './popular-tour-packages-list.component';

describe('PopularTourPackagesListComponent', () => {
  let component: PopularTourPackagesListComponent;
  let fixture: ComponentFixture<PopularTourPackagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularTourPackagesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTourPackagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
