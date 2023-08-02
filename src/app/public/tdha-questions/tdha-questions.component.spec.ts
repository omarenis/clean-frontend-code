import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdhaQuestionsComponent } from './tdha-questions.component';

describe('TdhaQuestionsComponent', () => {
  let component: TdhaQuestionsComponent;
  let fixture: ComponentFixture<TdhaQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdhaQuestionsComponent]
    });
    fixture = TestBed.createComponent(TdhaQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
