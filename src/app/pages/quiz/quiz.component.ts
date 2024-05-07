import {Component, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, RouterLink} from '@angular/router'
import {Quiz} from "../../model/quiz";
import {integralQuizzes} from "../../model/quizzes";
import {QuizCardComponent} from "../../components/quiz-card/quiz-card.component";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    QuizCardComponent
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {


  ngOnInit(): void {
  }


  protected readonly integralQuizzes = integralQuizzes;
}
