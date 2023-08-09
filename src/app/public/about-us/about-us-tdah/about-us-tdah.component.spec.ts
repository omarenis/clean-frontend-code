import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsTdahComponent } from './about-us-tdah.component';

describe('AboutUsTdahComponent', () => {
  let component: AboutUsTdahComponent;
  let fixture: ComponentFixture<AboutUsTdahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsTdahComponent]
    });
    fixture = TestBed.createComponent(AboutUsTdahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
