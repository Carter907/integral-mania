import { Component } from '@angular/core';
import {MathJaxParagraphComponent} from "../../math/math-jax-paragraph/math-jax-paragraph.component";
import {TheoremCard} from "../../model/theorem-card";
import {referenceCards} from "../../model/reference-cards";

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [
    MathJaxParagraphComponent
  ],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.css'
})
export class ReferenceComponent {


  protected readonly referenceCards = referenceCards;
}
