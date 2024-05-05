import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakingQuizComponent } from './taking-quiz.component';

describe('TakingQuizComponent', () => {
  let component: TakingQuizComponent;
  let fixture: ComponentFixture<TakingQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakingQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TakingQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
