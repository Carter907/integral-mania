import {Component, Input} from '@angular/core';
import {Question} from "../../model/question";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Quiz} from "../../model/quiz";

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink

  ],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.css'
})
export class QuizCardComponent {
  @Input({ required: true }) quiz!: Quiz

}
