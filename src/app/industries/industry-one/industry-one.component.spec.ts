import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryOneComponent } from './industry-one.component';

describe('IndustryOneComponent', () => {
  let component: IndustryOneComponent;
  let fixture: ComponentFixture<IndustryOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustryOneComponent]
    });
    fixture = TestBed.createComponent(IndustryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
