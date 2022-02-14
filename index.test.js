const sum = require('./index')

describe('Should contain tests for sum', () => {
  it('Should add 2 numbers', () => {
    //Arange
    const a = 4
    const b = 6
    const expectedResult = 10

    //Act
    const actual = sum(a, b)

    //Assert
    expect(actual).toBe(expectedResult)
  })
  it('Should return an error for invalid input', () => {
    //Arange
    const a = undefined
    const b = 6
    const expectedResult = 'Invalid Input'

    //Act
    const actual = sum(a, b)

    //Assert
    expect(actual).toBe(expectedResult)
  })
})
