export function commands(num: number) {
  function toBinary(num: number): string {
    return num.toString(2).padStart(5, '0')
  }

  const operations: string[] = []
  const binaryNum = toBinary(num)
  console.log(binaryNum)
  const actions = ['wink', 'double blink', 'close your eyes', 'jump', 'reverse']
  const binaryNumArr = binaryNum.split('').map(Number)


  binaryNumArr.forEach((bit, index) => {
    const actionIndex = binaryNumArr.length - 1 - index
    if (bit === 1) {
      operations.push(actions[actionIndex])
    }
  })

  operations.reverse()

  if (operations.includes('reverse')) {
    operations.splice(operations.indexOf('reverse'), 1)
    operations.reverse()

    return operations
  }
  
  return operations
}

console.log(commands(3))