import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryTwoComponent } from './industry-two.component';

describe('IndustryTwoComponent', () => {
  let component: IndustryTwoComponent;
  let fixture: ComponentFixture<IndustryTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustryTwoComponent]
    });
    fixture = TestBed.createComponent(IndustryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
