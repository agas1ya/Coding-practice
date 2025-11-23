export function answer(question: string): number {
  // Remove "What is" and the question mark, trim whitespace
  const cleaned = question
    .replace(/^What is\s*/i, '')
    .replace(/\?$/, '')
    .trim()

  // Check for empty question
  if (!cleaned) {
    throw new Error('Syntax error')
  }

  // Split into tokens
  const tokens = cleaned.split(/\s+/)

  // Check if it's just a number
  if (tokens.length === 1) {
    const num = parseNumber(tokens[0])
    if (num === null) {
      throw new Error('Syntax error')
    }
    return num
  }

  // Parse the expression
  let result = parseNumber(tokens[0])
  if (result === null) {
    // First token is not a number
    // Check if it's a valid operation (prefix notation = syntax error)
    if (parseOperation(tokens, 0)) {
      throw new Error('Syntax error')
    }
    // Not a number and not a valid operation = unknown operation
    throw new Error('Unknown operation')
  }

  let i = 1
  while (i < tokens.length) {
    // Expect an operation
    const operation = parseOperation(tokens, i)
    if (!operation) {
      // Not a valid operation - check if it's a number (two numbers in a row)
      if (parseNumber(tokens[i]) !== null) {
        throw new Error('Syntax error')
      }
      throw new Error('Unknown operation')
    }

    i += operation.length

    // Expect a number
    if (i >= tokens.length) {
      throw new Error('Syntax error')
    }

    const operand = parseNumber(tokens[i])
    if (operand === null) {
      // Expected a number but got something else
      // Check if it's an operation (two operations in a row)
      if (parseOperation(tokens, i)) {
        throw new Error('Syntax error')
      }
      throw new Error('Syntax error')
    }

    // Apply the operation
    result = applyOperation(result, operation.type, operand)
    i++
  }

  return result
}

function parseNumber(token: string): number | null {
  const num = Number(token)
  return isNaN(num) ? null : num
}

function parseOperation(tokens: string[], index: number): { type: string; length: number } | null {
  const token = tokens[index]

  // Single-word operations
  if (token === 'plus') return { type: 'add', length: 1 }
  if (token === 'minus') return { type: 'subtract', length: 1 }

  // Multi-word operations
  if (token === 'multiplied' && tokens[index + 1] === 'by') {
    return { type: 'multiply', length: 2 }
  }
  if (token === 'divided' && tokens[index + 1] === 'by') {
    return { type: 'divide', length: 2 }
  }

  return null
}

function applyOperation(left: number, operation: string, right: number): number {
  switch (operation) {
    case 'add':
      return left + right
    case 'subtract':
      return left - right
    case 'multiply':
      return left * right
    case 'divide':
      return left / right
    default:
      throw new Error('Unknown operation')
  }
}


