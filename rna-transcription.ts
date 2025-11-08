export function toRna(dnaNucleotide: string ) {
    const dnaNucleotideList: string[] = dnaNucleotide.split("")

    const dnaToRnaObj: { [key: string]: string } = {
        "G" : "C",
        "C" : "G",
        "T" : "A",
        "A" : "U"
    }

    let invalidDna = false
    function invalidDnaCheck() {
        invalidDna = true
    }

    // Loops through the dnaNucleotiteList 
    // changes each key to its value and creates a new list 
    // and then that list is converted back into a string
    // if the dna is found invalid during the looping then it throws an error
    const rnaNucleotides = (dnaNucleotideList.map(nucleotide => dnaToRnaObj[nucleotide] || invalidDnaCheck())).join("")

    if (invalidDna) throw new Error("Invalid input DNA.")
    return rnaNucleotides

}

console.log(toRna("AAGTCAGTCGATCGAGTCAUCTAGTCG"))
