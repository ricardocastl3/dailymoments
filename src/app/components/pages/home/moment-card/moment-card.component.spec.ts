import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentCardComponent } from './moment-card.component';

describe('MomentCardComponent', () => {
  let component: MomentCardComponent;
  let fixture: ComponentFixture<MomentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MomentCardComponent]
    });
    fixture = TestBed.createComponent(MomentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
