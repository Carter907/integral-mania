import { Routes } from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {HomeComponent} from "./pages/home/home.component";
import {QuizComponent} from "./pages/quiz/quiz.component";
import {ReferenceComponent} from "./pages/reference/reference.component";

export const routes: Routes = [
  { component: AboutComponent, path: "about" },
  { component: HomeComponent, path: "home" },
  { component: QuizComponent, path: "quiz" },
  { component: ReferenceComponent, path: "reference" },
];
