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

  test('should subtract the pastAge value from myAge.earthAge and return how many earthYears have passed since past age then store it in earthYearsSince property of myAge', () => {
    let pastAge = 5;
    myAge.yearsSince(myAge.earthAge, pastAge)
    expect(myAge.earthYearsSince).toEqual(5);
  });

  test('should correctly convert earthYearsSince property value to mercuryYearsSince, venusYearsSince, marsYearsSince, and jupiterYearsSince and store in the corresponding property of myAge obj', () => {
    let pastAge = 5;
    myAge.yearsSince(myAge.earthAge, pastAge)
    expect(myAge.earthYearsSince).toEqual(5);
    expect(myAge.mercuryYearsSince).toEqual(20.83);
    expect(myAge.venusYearsSince).toEqual(8.06);
    expect(myAge.marsYearsSince).toEqual(2.66);
    expect(myAge.jupiterYearsSince).toEqual(0.42);
  });

  test('should subtract myAge.earthAge from futureAge value and return how many earthYears until futureAge then store it in earthYearsTil property of myAge', () => {
    let futureAge = 15;
    myAge.yearsTil(myAge.earthAge, futureAge)
    expect(myAge.earthYearsTil).toEqual(5);
  });

  test('should correctly convert earthYearsTil property value to mercuryYearsTil, venusYearsTil, marsYearsTil, and jupiterYearsTil and store in the corresponding property of myAge obj', () => {
    let futureAge = 15;
    myAge.yearsTil(myAge.earthAge, futureAge)
    expect(myAge.earthYearsTil).toEqual(5);
    expect(myAge.mercuryYearsTil).toEqual(20.83);
    expect(myAge.venusYearsTil).toEqual(8.06);
    expect(myAge.marsYearsTil).toEqual(2.66);
    expect(myAge.jupiterYearsTil).toEqual(0.42);
  });
});
