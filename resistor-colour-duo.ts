// array of colors
export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

// function that decodes the value
export function decodedValue(input: Array<string>) {

    //takes only the first and second colour from the array

    const firstColour = COLORS.indexOf((input[0]).toLowerCase())
    const secondColour = COLORS.indexOf((input[1]).toLowerCase())
    
    // returns the "resistor" number combined and sends it back as a number

    return +`${firstColour}${secondColour}`
}

console.log((decodedValue(["black", "red"])))
