export class Rational {

  constructor(public numerator: number, public denominator: number) {}

  add(other: Rational): Rational {
    // The sum of two rational numbers (a₁ * b₂ + a₂ * b₁) / (b₁ * b₂).
    const postNumerator = this.numerator * other.denominator + this.denominator * other.numerator
    const postDenominator = this.denominator * other.denominator
    return new Rational(postNumerator, postDenominator)
  }

  sub(other: Rational): Rational {
    // The difference of two rational numbers (a₁ * b₂ - a₂ * b₁) / (b₁ * b₂).
    const postNumerator = this.numerator * other.denominator - other.numerator * this.denominator
    const postDenominator = this.denominator * other.denominator
    return new Rational(postNumerator, postDenominator)
  }

  mul(other: Rational): Rational {
    // The product (multiplication) of two rational numbers (a₁ * a₂) / (b₁ * b₂).
    const postNumerator = this.numerator * other.numerator 
    const postDenominator = this.denominator * other.numerator
    return new Rational(postNumerator, postDenominator)    
  }

  div(other: Rational): Rational {
    // Dividing a rational number (a₁ * b₂) / (a₂ * b₁) if a₂ is not zero.
    const postNumerator = this.numerator * other.denominator
    const postDenominator = other.numerator * this.denominator
    return new Rational(postNumerator, postDenominator)
  }

  abs(a: number, b: number) {
    // The absolute value |r| of the rational number r = a/b is equal to |a|/|b|.
    const postNumerator = Math.abs(a)
    const postDenominator = Math.abs(b)
    return new Rational(postNumerator, postDenominator)
  }

  exprational(n: number): Rational {
    // Exponentiation of a rational number r = a/b to a non-negative integer power n is r^n = (a^n)/(b^n).
    const postNumerator = this.numerator^n
    const postDenominator = this.denominator^n
    return new Rational(postNumerator, postDenominator)
  }

  expreal() {
    
  }

  reduce() {
    throw new Error('Remove this line and implement the function')
  }
}