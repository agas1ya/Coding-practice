export function hey(message: string): string {
    // no caps, question -> "Sure"
    // All caps, no question -> "Woah, chill out!"
    // All caps, question -> "Calm down, I know what I'm doing!"
    // blank -> "Fine. Be that way!"
    // no caps, no question, no blank -> "Whatever"

    function isAllCaps(str: string): boolean {
       return str === str.toUpperCase() && /[A-Z]/.test(str)
    }

    function isQuestion(str: string): boolean {
        let strNoSpace = str.replace(/\s+/g, "")
        return strNoSpace.endsWith("?")? true : false
    }

    function isBlank(str: string): boolean {
        return (str.trim() === "")? true : false
    }

    if(isAllCaps(message) === false && isQuestion(message)) {
        return "Sure."
    }

    if(isAllCaps(message) && isQuestion(message) === false) {
        return "Whoa, chill out!"
    }

    if(isAllCaps(message) && isQuestion(message)) {
        return "Calm down, I know what I'm doing!"
    }
    
    if(isBlank(message)) {
        return "Fine. Be that way!"
    }
  
    return "Whatever."
    
}