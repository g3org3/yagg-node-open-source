const { main } = require('../index')

describe('index test', () => {
  it('should return 2', () => {
    const result = index()
    expect(result).toEqual(2)
  })
})
