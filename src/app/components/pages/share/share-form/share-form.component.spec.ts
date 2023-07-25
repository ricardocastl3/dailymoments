import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareFormComponent } from './share-form.component';

describe('ShareFormComponent', () => {
  let component: ShareFormComponent;
  let fixture: ComponentFixture<ShareFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareFormComponent]
    });
    fixture = TestBed.createComponent(ShareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
