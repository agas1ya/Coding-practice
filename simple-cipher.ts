export class SimpleCipher {
  key: string;

  constructor(key?: string) {
    this.key = key || this.generateRandomKey();
  }

  private generateRandomKey(): string {
    return Array.from({ length: 100 }, () =>
      String.fromCharCode(97 + Math.floor(Math.random() * 26))
    ).join('');
  }

  private trimKey(text: string, key: string): string {
    const repeatedKey = key.repeat(Math.ceil(text.length / key.length));
    return repeatedKey.slice(0, text.length);
  }

  private letterToNumber(char: string): number {
    return char.charCodeAt(0) - 97; // a = 0, b = 1, ..., z = 25
  }

  private numberToLetter(num: number): string {
    // proper modulo for negative numbers
    const normalized = ((num % 26) + 26) % 26;
    return String.fromCharCode(normalized + 97);
  }

  private shiftLetter(char: string, shift: number): string {
    const num = this.letterToNumber(char);
    return this.numberToLetter(num + shift);
  }

  encode(text: string): string {
    const trimmedKey = this.trimKey(text, this.key);

    return text
      .split('')
      .map((char, i) => {
        const shift = this.letterToNumber(trimmedKey[i]);
        return this.shiftLetter(char, shift);
      })
      .join('');
  }

  decode(text: string): string {
    const trimmedKey = this.trimKey(text, this.key);

    return text
      .split('')
      .map((char, i) => {
        const shift = this.letterToNumber(trimmedKey[i]);
        return this.numberToLetter(this.letterToNumber(char) - shift);
      })
      .join('');
  }
}


