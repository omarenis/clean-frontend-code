import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProfileTdahComponent } from './child-profile-tdah.component';

describe('ChildProfileTdahComponent', () => {
  let component: ChildProfileTdahComponent;
  let fixture: ComponentFixture<ChildProfileTdahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildProfileTdahComponent]
    });
    fixture = TestBed.createComponent(ChildProfileTdahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
