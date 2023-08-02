import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutisticQuestionsComponent } from './autistic-questions.component';

describe('AutisticQuestionsComponent', () => {
  let component: AutisticQuestionsComponent;
  let fixture: ComponentFixture<AutisticQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutisticQuestionsComponent]
    });
    fixture = TestBed.createComponent(AutisticQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
