import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsAutismeComponent } from './about-us-autisme.component';

describe('AboutUsAutismeComponent', () => {
  let component: AboutUsAutismeComponent;
  let fixture: ComponentFixture<AboutUsAutismeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsAutismeComponent]
    });
    fixture = TestBed.createComponent(AboutUsAutismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
