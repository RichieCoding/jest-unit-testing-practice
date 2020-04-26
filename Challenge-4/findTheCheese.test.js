const findTheCheese = require('./findTheCheese')

describe('findTheCheese', () => {
  test('return the first string that is a type cheese in the array', () => {
    const cheddarCheese = ["banana", "camembert", "sock", "cheddar"];
    expect(findTheCheese(cheddarCheese)).toBe('camembert')
  })

  test('returns "no cheese!" if the array contains no cheese', () => {
    const noCheeseArray = ["banana", "tomato", "sock"];
    expect(findTheCheese(noCheeseArray)).toBe('no cheese!')
  })
})

