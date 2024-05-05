import {Routes} from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {HomeComponent} from "./pages/home/home.component";
import {QuizComponent} from "./pages/quiz/quiz.component";
import {ReferenceComponent} from "./pages/reference/reference.component";
import {TakingQuizComponent} from "./pages/taking-quiz/taking-quiz.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: "about", component: AboutComponent},
  {path: "home", component: HomeComponent},
  {path: "quiz", component: QuizComponent},
  {path: "reference", component: ReferenceComponent},
  {path: "quiz/:id", component: TakingQuizComponent}
];
