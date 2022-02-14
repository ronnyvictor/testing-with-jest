const sum = (a, b) => {
  if (!(a && b)) {
    return 'Invalid Input'
  }
  return a + b
}

module.exports = sum
