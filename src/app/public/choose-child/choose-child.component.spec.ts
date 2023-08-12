import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseChildComponent } from './choose-child.component';

describe('ChooseChildComponent', () => {
  let component: ChooseChildComponent;
  let fixture: ComponentFixture<ChooseChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseChildComponent]
    });
    fixture = TestBed.createComponent(ChooseChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
