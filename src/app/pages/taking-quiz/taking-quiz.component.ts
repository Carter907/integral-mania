import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../model/question";
import {FormsModule} from "@angular/forms";
import {Quiz} from "../../model/quiz";
import {MathJaxParagraphComponent} from "../../math/math-jax-paragraph/math-jax-paragraph.component";
import {ActivatedRoute, Router} from "@angular/router";
import {integralQuizzes} from "../../model/quizzes";

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

  quiz: Quiz = {description: "", id: 0, questions: [], title: ""}

  currentIndex = 0;
  currentQuestion: Question = {answers: [], correctAnswer: "", equation: "", title: ""}
  isCorrect = false;
  userAnswer: string = ''

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.quiz = integralQuizzes.find((quiz: Quiz) => Number.parseInt(this.route.snapshot.paramMap.get('id')!!) === quiz.id)!!;
    this.currentQuestion = this.quiz.questions[this.currentIndex]
  }

  checkAnswer() {
    this.isCorrect = this.userAnswer === this.currentQuestion.correctAnswer

  }

  nextQuestion() {
    this.isCorrect = false;
    this.currentQuestion = this.quiz.questions[++this.currentIndex]
  }
}
