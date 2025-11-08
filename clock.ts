export class Clock {
  private hour: number
  private minute: number

  static rawHourToHour(rawHour: number) {
    if (rawHour >= 0 && rawHour < 24) {
      return rawHour
    }
    return ((rawHour % 24) + 24) % 24 // handles both positive and negative
  }

  static minutesToHours(min: number) {
    if (min >= 0 && min < 60) {
      return [0, min]
    }
    const hours = Math.floor(min / 60)
    const minutes = ((min % 60) + 60) % 60
    return [hours, minutes]
  }

  constructor(hour: number, minute: number = 0) {
    // Convert everything to minutes
    const totalMinutes = hour * 60 + minute
    
    // Convert back to hours and minutes
    const [addedHours, finalMinutes] = Clock.minutesToHours(totalMinutes)
    
    this.hour = Clock.rawHourToHour(addedHours)
    this.minute = finalMinutes
  }

  public toString(): string {
    const h = this.hour.toString().padStart(2, '0')
    const m = this.minute.toString().padStart(2, '0')
    return `${h}:${m}`
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hour, this.minute + minutes)
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hour, this.minute - minutes)
  }

  public equals(other: Clock): boolean {
    return this.hour === other.hour && this.minute === other.minute
  }
}