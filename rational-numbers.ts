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
    let postNumerator = Math.abs(this.numerator) ** n;
    let postDenominator = Math.abs(this.denominator) ** n;

    if (this.numerator < 0 && n % 2 !== 0) {
      postNumerator = -postNumerator;
    }

    return new Rational(postNumerator, postDenominator);
  }

  expreal(x: number): number {
    if (this.denominator === 0) throw new Error("Denominator cannot be zero");
    return x ** (this.numerator / this.denominator);
  }

  private gcd(a: number, b: number): number {
    return b === 0 ? Math.abs(a) : this.gcd(b, a % b);
  }

  reduce(): Rational {
    const gcdValue = this.gcd(this.numerator, this.denominator);
    let num = this.numerator / gcdValue;
    let den = this.denominator / gcdValue;

    // Ensure denominator is positive
    if (den < 0) {
      num = -num;
      den = -den;
    }

    return new Rational(num, den);
  }
}