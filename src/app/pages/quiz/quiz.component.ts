import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, RouterLink} from '@angular/router'

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {

  id: number = 0;

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      this.id = parseInt(this.route.snapshot.params['id']);
    }
  }
  constructor(private route: ActivatedRoute) {

  }

}
