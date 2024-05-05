import {TheoremCard} from "./theorem-card";

export const referenceCards: TheoremCard[] = [
  {
    title: 'Fundamental Theorem of Calculus',
    description: 'This theorem provides a relationship between the integral of a function and the antiderivative of that function.',
    equations: [
      '\\int_a^b f(x) dx = F(b)-F(a)',
    ]
  },
  {
    title: 'Integration by Parts',
    description: 'Integration by Parts is a method used in calculus to integrate the product of two functions.',
    equations: [
      '\\int u dv = u v - \\int v du'
    ]
  },
  {
    title: 'Integral of sin and cos',
    description: 'These are basic integrals involving trigonometric functions.',
    equations: [
      '\\int \\sin(x) dx = -\\cos(x) + C',
      '\\int \\cos(x) dx = \\sin(x) + C'
    ]
  }

];
