import Age from './../src/Age.js';

//show results
function showSolarAge(myAge){
  let newEarthAge = document.createElement("li");
  newEarthAge.innerText =  "You are " + myAge.earthAge + " Earth years old.";
  document.getElementById("showAges").append(newEarthAge);

  let newMercuryAge = document.createElement("li");
  myAge.mercuryYears(myAge.earthAge);
  newMercuryAge.innerText =  "You are " + myAge.mercuryAge + " Mercury years old.";
  document.getElementById("showAges").append(newMercuryAge);

  let newVenusAge = document.createElement("li");
  myAge.venusYears(myAge.earthAge);
  newVenusAge.innerText =  "You are " + myAge.venusAge + " Venus years old.";
  document.getElementById("showAges").append(newVenusAge);

  let newMarsAge = document.createElement("li");
  myAge.marsYears(myAge.earthAge);
  newMarsAge.innerText =  "You are " + myAge.marsAge + " Mars years old.";
  document.getElementById("showAges").append(newMarsAge);

  let newJupiterAge = document.createElement("li");
  myAge.jupiterYears(myAge.earthAge);
  newJupiterAge.innerText =  "You are " + myAge.jupiterAge + " Jupiter years old.";
  document.getElementById("showAges").append(newJupiterAge);
}

// solar age
function currentAgeSubmit(){
  let myEarthAge = document.getElementById("earthAgeInput").value;
  let myAge = new Age(myEarthAge);
  showSolarAge(myAge);
  return myAge;
}


//listeners

window.addEventListener("load", () => {
  const solarAgeForm = document.getElementById("solarAge");
  let myAge;
  solarAgeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    myAge = currentAgeSubmit();
  });

});
