import Age from './../src/Age.js';

//show results

// solar age
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

// solar age since
function showSinceSolarAge(mySinceAge, myPastAge){
  mySinceAge.yearsSince(mySinceAge.earthAge, myPastAge);

  let newSinceEarthAge = document.createElement("li");
  newSinceEarthAge.innerText =  "You are " + mySinceAge.earthAge + " Earth years old.";
  document.getElementById("showSinceAges").append(newSinceEarthAge);

  let newPastEarthAge = document.createElement("li");
  newPastEarthAge.innerText =  "It has been " + mySinceAge.earthYearsSince + " Earth years since you were " + myPastAge + " years old.";
  document.getElementById("showSinceAges").append(newPastEarthAge);

  let newPastMercuryAge = document.createElement("li");
  newPastMercuryAge.innerText =  "It has been " + mySinceAge.mercuryYearsSince + " Mercury years since you were " + myPastAge + " years old on Earth.";
  document.getElementById("showSinceAges").append(newPastMercuryAge);

  let newPastVenusAge = document.createElement("li");
  newPastVenusAge.innerText =  "It has been " + mySinceAge.venusYearsSince + " Venus years since you were " + myPastAge + " years old on Earth.";
  document.getElementById("showSinceAges").append(newPastVenusAge);

  let newPastMarsAge = document.createElement("li");
  newPastMarsAge.innerText =  "It has been " + mySinceAge.marsYearsSince + " Mars years since you were " + myPastAge + " years old on Earth.";
  document.getElementById("showSinceAges").append(newPastMarsAge);

  let newPastJupiterAge = document.createElement("li");
  newPastJupiterAge.innerText =  "It has been " + mySinceAge.jupiterYearsSince + " Jupiter years since you were " + myPastAge + " years old on Earth.";
  document.getElementById("showSinceAges").append(newPastJupiterAge);
}


//handle submits

// solar age
function currentAgeSubmit(){
  let myEarthAge = document.getElementById("earthAgeInput").value;
  let myAge = new Age(myEarthAge);
  showSolarAge(myAge);
  return myAge;
}

// solar age since
function sinceAgeSubmit(){
  let mySinceEarthAge = document.getElementById("earthAgeSinceInput").value;
  let myPastAge = document.getElementById("pastAgeInput").value;
  let mySinceAge = new Age(mySinceEarthAge);
  showSinceSolarAge(mySinceAge, myPastAge);
  return mySinceAge;
}

//listeners

window.addEventListener("load", () => {
  const solarAgeForm = document.getElementById("solarAge");
  const solarAgeSinceForm = document.getElementById("solarAgeSince");
  let myAge;
  solarAgeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    myAge = currentAgeSubmit();
  });
  solarAgeSinceForm.addEventListener("submit", (event) => {
    event.preventDefault();
    myAge = sinceAgeSubmit();
  });
});
