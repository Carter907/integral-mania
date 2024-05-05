import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../model/question";
import {FormsModule} from "@angular/forms";
import {Quiz} from "../../model/quiz";
import {MathJaxParagraphComponent} from "../../math/math-jax-paragraph/math-jax-paragraph.component";

@Component({
  selector: 'app-taking-quiz',
  standalone: true,
  imports: [
    FormsModule,
    MathJaxParagraphComponent
  ],
  templateUrl: './taking-quiz.component.html',
  styleUrl: './taking-quiz.component.css'
})
export class TakingQuizComponent implements OnInit {

  @Input({ required: true }) quiz!: Quiz;

  currentQuestion: Question = this.quiz.questions[0];

  userAnswer: string = ''

  checkAnswer() {

  }

  ngOnInit(): void {
  }
}
