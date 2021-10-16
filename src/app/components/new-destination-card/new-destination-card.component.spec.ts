import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDestinationCardComponent } from './new-destination-card.component';

describe('NewDestinationCardComponent', () => {
  let component: NewDestinationCardComponent;
  let fixture: ComponentFixture<NewDestinationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDestinationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDestinationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
