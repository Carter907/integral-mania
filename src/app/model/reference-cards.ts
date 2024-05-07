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
  },
  {
    title: 'Power Rule of Integration',
    description: 'The power rule for integration is a fundamental concept in calculus that simplifies the process of finding the indefinite integral of a polynomial function.',
    equations: [
      '\\int du = u + C',
      '\\int k du = ku + C',
      '\\int u^n du = \\frac{u^{n+1}}{n+1}+C'
    ]
  },
  {
    title: "Integration by Substitution",
    description: "if g' is continuous on the interval [a, b] and f is continuous on the range of g(x) = u, then",
    equations: [
      "\\int_a^b f(g(x))\\cdot g'(x)dx=\\int_{g(a)}^{g(b)}f(u)du"
    ]
  },
  {
    title: "Improper Integration",
    description: "Improper integrals are integrals that are not defined in the standard way. They can have infinite limits of integration or discontinuities within the integration interval.",
    equations: [
      "\\int_a^{\\infty} f(x) dx=\\lim_{b\\to\\infty} \\int_a^{b} f(x) dx", // Example of an improper integral with one infinite limit of integration
      "\\int_{\\infty}^b f(x) dx=\\lim_{a\\to\\infty} \\int_a^{b} f(x) dx",

    ]
  }
  // },
  // {
  //   title: '',
  //   description: '',
  //   equations: [
  //
  //   ]
  // },
  // {
  //   title: '',
  //   description: '',
  //   equations: [
  //
  //   ]
  // },
  // {
  //   title: '',
  //   description: '',
  //   equations: [
  //
  //   ]
  // },
  // {
  //   title: '',
  //   description: '',
  //   equations: [
  //
  //   ]
  // }



];
