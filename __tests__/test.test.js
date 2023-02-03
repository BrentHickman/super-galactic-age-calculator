import Age from './../src/Age.js'

describe('Age', () => {

  test('should correctly create an Age class with an earthAge Property of input', () => {
    const myAge = new Age(10);
    expect(myAge.type).toEqual(10);
  });
});
