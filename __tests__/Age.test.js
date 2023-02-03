import Age from '../src/Age.js'

describe('Age', () => {

  let myAge;

  beforeEach(() => {
    myAge = new Age(10);
  });

  test('should correctly create an Age class with an earthAge Property of input', () => {
    expect(myAge.earthAge).toEqual(10);
  });

  test('should take the earthAge of myAge and convert it to mercury years and add mercuryYears property to Age class', () => {
    expect(mercuryYears(myAge)).toEqual(41.66);
  });
});
