import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProfileTDAHComponent } from './child-profile-tdah.component';

describe('ChildProfileTDAHComponent', () => {
  let component: ChildProfileTDAHComponent;
  let fixture: ComponentFixture<ChildProfileTDAHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildProfileTDAHComponent]
    });
    fixture = TestBed.createComponent(ChildProfileTDAHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
