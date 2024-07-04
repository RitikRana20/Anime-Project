import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagetaaComponent } from './vagetaa.component';

describe('VagetaaComponent', () => {
  let component: VagetaaComponent;
  let fixture: ComponentFixture<VagetaaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VagetaaComponent]
    });
    fixture = TestBed.createComponent(VagetaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
