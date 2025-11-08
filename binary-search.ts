export function find(haystack: number[], needle: number) {
  // Loop this process until you find the needle's pos
  // Check if the needle is either lower, higher or equal to the middle number in the haystack
  // If it is equal to then check then call function check pos
  // If it is lower or higher remove the corresponding group of numbers including the middle number
  if (haystack.includes(needle) === false) { 
    throw new Error('Value not in array') 
  }

  let needlePosFound = false
  const orginalArray = haystack

  function findPos(arr: number[], num: number) {
    const numPos = arr.indexOf(num)
    return numPos
  }

  while (needlePosFound === false) {
    const middleIndex = Math.floor(haystack.length / 2);
    const middleNumber = haystack[middleIndex]

    if (middleNumber === needle) {
      // "equal"
      needlePosFound = true
      return findPos(orginalArray, middleNumber)
    }

    if (middleNumber < needle) {
      // "higher"
      haystack = haystack.filter(num => num > middleNumber)
      console.log("higher")
      console.log(haystack)
    }

    if (middleNumber > needle) {
      // "lower"
      haystack = haystack.filter(num => num < middleNumber)
      console.log("lower")
      console.log(haystack)
    } 
  }
}

const array = [1, 3, 6, 7, 8, 9]
console.log(find(array, 10))