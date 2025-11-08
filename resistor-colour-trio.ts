export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

export function decodedResistorValue(input: Array<string>) {

    const firstColourValue = COLORS.indexOf((input[0]).toLowerCase())
    const secondColourValue = COLORS.indexOf((input[1]).toLowerCase())
    let noOfZeros: number = COLORS.indexOf((input[2]).toLowerCase())
    
    const combColValue = (+`${firstColourValue}${secondColourValue}`)
    let prefix = ""

    function prefixSetter(noOfZeros: number): number {
        if (noOfZeros >= 2 && noOfZeros < 6) {
            prefix = "kiloohms"
            return noOfZeros - 3
        } else if (noOfZeros >= 6 && noOfZeros < 9) {
            prefix = "megaohms"
            return noOfZeros - 6
        } else if (noOfZeros >= 9 && noOfZeros < 12) {
            prefix = "gigaohms"
            return noOfZeros - 9
        } else {
            prefix = "ohms"
            return noOfZeros
        }
    }

    const finalValue = combColValue * Math.pow(10, prefixSetter(noOfZeros))

    return `${finalValue} ${prefix}`
}

console.log(decodedResistorValue(["red", "black", "red"]))