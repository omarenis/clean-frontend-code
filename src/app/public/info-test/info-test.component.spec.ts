import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTestComponent } from './info-test.component';

describe('InfoTestComponent', () => {
  let component: InfoTestComponent;
  let fixture: ComponentFixture<InfoTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoTestComponent]
    });
    fixture = TestBed.createComponent(InfoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
