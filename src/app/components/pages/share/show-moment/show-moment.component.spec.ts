import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMomentComponent } from './show-moment.component';

describe('ShowMomentComponent', () => {
  let component: ShowMomentComponent;
  let fixture: ComponentFixture<ShowMomentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowMomentComponent]
    });
    fixture = TestBed.createComponent(ShowMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
