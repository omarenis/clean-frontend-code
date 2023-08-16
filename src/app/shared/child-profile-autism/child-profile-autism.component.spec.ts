import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProfileAutismComponent } from './child-profile-autism.component';

describe('ChildProfileAutismComponent', () => {
  let component: ChildProfileAutismComponent;
  let fixture: ComponentFixture<ChildProfileAutismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildProfileAutismComponent]
    });
    fixture = TestBed.createComponent(ChildProfileAutismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
