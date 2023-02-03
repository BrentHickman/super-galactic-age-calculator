import Age from './../src/Age.js'

describe('Age', () => {

  let myAge;

  beforeEach(() => {
    myAge = new Age(10);
  });

  test('should correctly create an Age class with an earthAge Property of input', () => {
    expect(myAge.earthAge).toEqual(10);
  });

  test('should take the earthAge of myAge and convert it to mercury years and add mercuryAge property to Age class', () => {
    myAge.mercuryYears(myAge.earthAge)
    expect(myAge.mercuryAge).toEqual(41.67);
  });

  test('should take the earthAge of myAge and convert it to venus years and update venusAge property in Age class', () => {
    myAge.venusYears(myAge.earthAge)
    expect(myAge.venusAge).toEqual(16.13);
  });

  test('should take the earthAge of myAge and convert it to mars years and update marsAge property in Age class', () => {
    myAge.marsYears(myAge.earthAge)
    expect(myAge.marsAge).toEqual(5.32);
  });

  test('should take the earthAge of myAge and convert it to jupiter years and update jupiterAge property in Age class', () => {
    myAge.jupiterYears(myAge.earthAge)
    expect(myAge.jupiterAge).toEqual(0.84);
  });
});
