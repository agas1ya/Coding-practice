const atbashCipher: {[key: string]: string} = {
  'a' : 'z',
  'b' : 'y',
  'c' : 'x',
  'd' : 'w',
  'e' : 'v',
  'f' : 'u',
  'g' : 't',
  'h' : 's',
  'i' : 'r',
  'j' : 'q',
  'k' : 'p',
  'l' : 'o',
  'm' : 'n',
  'n' : 'm',
  'o' : 'l',
  'p' : 'k',
  'q' : 'j',
  'r' : 'i',
  's' : 'h',
  't' : 'g',
  'u' : 'f',
  'v' : 'e',
  'w' : 'd',
  'x' : 'c',
  'y' : 'b',
  'z' : 'a'
}

export function encode(plainText: string): string {
  let encrypted = "" // encrypting first

  for (const char of (plainText.toLowerCase())) {
    if(char === "." || char === ",") {
      continue
    } else if (char in atbashCipher) {
      encrypted += atbashCipher[char]
    } else {
      encrypted += char
    }
  }

  let ordered = "" // then ordering (in groups of 5)
  let count = 0 

  for (const char of (encrypted.replace(/\s+/g, ""))) {
    ordered += char
    count++

    if(count % 5 === 0) {
      ordered += " "
    }
  }

  return (ordered.toLowerCase()).trim()
}

export function decode(cipherText: string): string {
  let decrypted = ""

  for (const char of (cipherText.replace(/\s+/g, "")).toLowerCase()) {
    if (char in atbashCipher) {
      decrypted += (Object.keys(atbashCipher) as Array<keyof typeof atbashCipher>).find(k => atbashCipher[k] === char)
    } else {
      decrypted += char
    }
  }

  return decrypted
}

console.log(encode("I like dogs, as they are good animals"))
