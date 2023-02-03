export default class Age {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  }

  mercuryYears(earthAge){
    this.mercuryAge = Number((earthAge / 0.24).toFixed(2)); 
  }

  venusYears(earthAge){
    this.venusAge = Number((earthAge / 0.62).toFixed(2)); 
  }
}
