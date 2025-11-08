export class Matrix {
  private matrixString: string // declaring the matrix string

  constructor(matrixString: string) {
    this.matrixString = matrixString // stores matrix string inside an object so other methods can use it
  }

  get rows(): number[][] {
    return this.matrixString // returning an array of numbers in an array of rows
     .split('\n')
     .map(row => row.split(' ').map(Number))
  }

  get columns(): number[][] {
    const rows = this.rows // defines the getrows into a varible so it can be used
    const numCols = rows[0].length // check's the rows length so we can find out how many columns we need
    const columns = [] // the array that is needed so we can add the columns array(s) inside
    for (let i = 0; i < numCols; i++) { 
      const col = rows.map(row => row[i]) // map creates new array for each column  
      columns.push(col) // this pushes the new array into columns array
    }
    return columns
  }
}
