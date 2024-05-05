import {Quiz} from "./quiz";

export const integralQuizzes: Quiz[] = [
  {
    id: 1,
    title: 'Basic Integration Quiz',
    questions: [
      {
        title: 'Solve the Integral',
        equation: '\\int x dx',
        answers: [
          'x',
          'x + C',
          '\\frac{x^2}{2}+C',
          'x^2 + C'
        ],
        correctAnswer: '\\frac{x^2}{2}+C'
      }

    ],

  },
  {
    id: 2,
    title: 'Advanced Integration Quiz',
    questions: [
      {
        title: 'Solve the Integral',
        equation: '\\int \\frac{1}{x} dx',
        answers: [
          '\\log_10(x) +C',
          '\\ln(c)',
          '\\frac{1}{\\ln(x)}+C',
          '\\ln(x)+C'
        ],
        correctAnswer: '\\ln(x)+C'
      }

    ],

  }
]
