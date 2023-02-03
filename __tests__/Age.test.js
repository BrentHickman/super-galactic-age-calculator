import Age from './../src/Age.js'

describe('Age', () => {

  let myAge;

  beforeEach(() => {
    myAge = new Age(10);
  });

  test('should correctly create an Age class with an earthAge Property of input', () => {
    expect(myAge.earthAge).toEqual(10);
  });

  test('should take the earthAge of myAge and convert it to mercury years and add mercuryYears property to Age class', () => {
    myAge.mercuryYears(myAge.earthAge)
    expect(myAge.mercuryAge).toEqual(41.67);
  });

  test('should take the earthAge of myAge and convert it to venus years and update venusYears property in Age class', () => {
    myAge.venusYears(myAge.earthAge)
    expect(myAge.venusAge).toEqual(16.13);
  });
});
