export class Robot {
  private static usedNames = new Set<string>()
  private _name: string | null = null

  constructor() {
    this._name = Robot.generateUniqueName()
  }

  get name(): string {
    if (!this._name) {
      this._name = Robot.generateUniqueName()
    }
    return this._name
  }

  resetName(): void {
    // Generate a new unique name
    // Note: We don't release the old name - it stays used forever
    this._name = Robot.generateUniqueName()
  }

  static releaseNames(): void {
    Robot.usedNames.clear()
  }

  private static generateUniqueName(): string {
    // Total possible names: 26 * 26 * 10 * 10 * 10 = 676,000
    const maxAttempts = 676000
    
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const name = Robot.generateRandomName()
      
      if (!Robot.usedNames.has(name)) {
        Robot.usedNames.add(name)
        return name
      }
    }
    
    throw new Error('All robot names have been exhausted')
  }

  private static generateRandomName(): string {
    // Generate two random uppercase letters
    const letter1 = String.fromCharCode(65 + Math.floor(Math.random() * 26))
    const letter2 = String.fromCharCode(65 + Math.floor(Math.random() * 26))
    
    // Generate three random digits
    const digit1 = Math.floor(Math.random() * 10)
    const digit2 = Math.floor(Math.random() * 10)
    const digit3 = Math.floor(Math.random() * 10)
    
    return `${letter1}${letter2}${digit1}${digit2}${digit3}`
  }
}
