export default class Age {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge, earthYearsSince) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.earthYearsSince = earthYearsSince;
  }

  mercuryYears(earthAge){
    this.mercuryAge = Number((earthAge / 0.24).toFixed(2)); 
  }

  venusYears(earthAge){
    this.venusAge = Number((earthAge / 0.62).toFixed(2)); 
  }

  marsYears(earthAge){
    this.marsAge = Number((earthAge / 1.88).toFixed(2));
  }

  jupiterYears(earthAge){
    this.jupiterAge = Number((earthAge / 11.86).toFixed(2));
  }

  yearsSince(earthAge, pastAge){
    // this.yearsSince = Number((earthAge - pastAge).toFixed(2));
  }

}
