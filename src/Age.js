export default class Age {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge, earthYearsSince, mercuryYearsSince, venusYearsSince, marsYearsSince, jupiterYearsSince, earthYearsTil, mercuryYearsTil, venusYearsTil, marsYearsTil, jupiterYearsTil) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.earthYearsSince = earthYearsSince;
    this.mercuryYearsSince = mercuryYearsSince;
    this.venusYearsSince = venusYearsSince;
    this.marsYearsSince = marsYearsSince;
    this.jupiterYearsSince = jupiterYearsSince;
    this.earthYearsTil = earthYearsTil;
    this.mercuryYearsTil = mercuryYearsTil;
    this.venusYearsTil = venusYearsTil;
    this.marsYearsTil = marsYearsTil;
    this.jupiterYearsTil = jupiterYearsTil;
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
    this.earthYearsSince = Number((earthAge - pastAge).toFixed(2));
    this.mercuryYearsSince = Number((this.earthYearsSince / 0.24).toFixed(2));
    this.venusYearsSince = Number((this.earthYearsSince / 0.62).toFixed(2));
    this.marsYearsSince = Number((this.earthYearsSince / 1.88).toFixed(2));
    this.jupiterYearsSince = Number((this.earthYearsSince / 11.86).toFixed(2));
  }

  yearsTil(earthAge, futureAge){
    this.earthYearsTil = Number((futureAge - earthAge).toFixed(2));
  }
}
