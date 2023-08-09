import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProfileAutismeComponent } from './child-profile-autisme.component';

describe('ChildProfileAutismeComponent', () => {
  let component: ChildProfileAutismeComponent;
  let fixture: ComponentFixture<ChildProfileAutismeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildProfileAutismeComponent]
    });
    fixture = TestBed.createComponent(ChildProfileAutismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
