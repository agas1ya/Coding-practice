export function isPangram(input: string): boolean {
  // lower it to make it case sensitive
  // check if it includes every letter of the alphabet
  // return a boolean value
  const alphabet = new Set('abcdefghijklmnopqrstuvwxyz')
  let sentence = input.toLowerCase()
  
  for (const char of sentence) {
    if (alphabet.has(char)) {
        alphabet.delete(char)
    }
  }

  return alphabet.size === 0 ? true : false
}
console.log(isPangram("abcdefg hijklmnopqrs tuvwxyz"))
