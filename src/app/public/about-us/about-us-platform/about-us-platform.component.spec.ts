import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPlatformComponent } from './about-us-platform.component';

describe('AboutUsPlatformComponent', () => {
  let component: AboutUsPlatformComponent;
  let fixture: ComponentFixture<AboutUsPlatformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsPlatformComponent]
    });
    fixture = TestBed.createComponent(AboutUsPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
