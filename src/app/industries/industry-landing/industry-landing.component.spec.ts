import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryLandingComponent } from './industry-landing.component';

describe('IndustryLandingComponent', () => {
  let component: IndustryLandingComponent;
  let fixture: ComponentFixture<IndustryLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustryLandingComponent]
    });
    fixture = TestBed.createComponent(IndustryLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
