export class DnDCharacter {
  public static generateAbilityScore(): number {
    //generates a random value between 1 - 6
    function randomValue() {
        return Math.floor(Math.random() * 6) + 1;
    }
    //creates a temporary list where we can store our 4 random numbers
    let tempList: number[] = []
    for (let i = 0; i < 4; i++) {
        tempList.push(randomValue())   
    }
    //creates a new list without the lowest number and returns the sum of all the numbers
    const finalList = tempList.filter(num => num !== (Math.min(...tempList)) )
    return finalList.reduce((total, num) => total + num, 0)
  }

  public static getModifierFor(abilityValue: number): number {
    //subtracts 10 from ability value and then divides by 2 and then rounds to the nearest whole number
    return Math.floor((abilityValue - 10) / 2)
  }
  
  //defining all the abillities
  public strength = DnDCharacter.generateAbilityScore()
  public dexterity = DnDCharacter.generateAbilityScore()
  public constitution = DnDCharacter.generateAbilityScore()
  public intelligence = DnDCharacter.generateAbilityScore()
  public hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  public wisdom = DnDCharacter.generateAbilityScore()
  public charisma = DnDCharacter.generateAbilityScore()

  //character object for all the abilities
  public character: { [key: string]: number } = {
    'strength' : this.strength,
    'dexterity' : this.dexterity,
    'constitution' : this.constitution,
    'intelligence' : this.intelligence,
    'hitpoints' : this.hitpoints,
    'wisdom' : this.wisdom,
    'charisma' : this.charisma
  }

}