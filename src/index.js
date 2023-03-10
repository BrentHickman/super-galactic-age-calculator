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

// solar age until
function showTilSolarAge(myTilAge, myFutureAge){
  myTilAge.yearsTil(myTilAge.earthAge, myFutureAge);

  let newTilEarthAge = document.createElement("li");
  newTilEarthAge.innerText =  "You are " + myTilAge.earthAge + " Earth years old.";
  document.getElementById("showTilAges").append(newTilEarthAge);

  let newFutureEarthAge = document.createElement("li");
  newFutureEarthAge.innerText =  "It will take " + myTilAge.earthYearsTil + " Earth years until you are " + myFutureAge + " years old.";
  document.getElementById("showTilAges").append(newFutureEarthAge);

  let newFutureMercuryAge = document.createElement("li");
  newFutureMercuryAge.innerText =  "It will take " + myTilAge.mercuryYearsTil + " Mercury years until you are " + myFutureAge + " years old on Earth.";
  document.getElementById("showTilAges").append(newFutureMercuryAge);

  let newFutureVenusAge = document.createElement("li");
  newFutureVenusAge.innerText =  "It will take " + myTilAge.venusYearsTil + " Venus years until you are " + myFutureAge + " years old on Earth.";
  document.getElementById("showTilAges").append(newFutureVenusAge);

  let newFutureMarsAge = document.createElement("li");
  newFutureMarsAge.innerText =  "It will take " + myTilAge.marsYearsTil + " Mars years until you are " + myFutureAge + " years old on Earth.";
  document.getElementById("showTilAges").append(newFutureMarsAge);

  let newFutureJupiterAge = document.createElement("li");
  newFutureJupiterAge.innerText =  "It will take " + myTilAge.jupiterYearsTil + " Jupiter years until you are " + myFutureAge + " years old on Earth.";
  document.getElementById("showTilAges").append(newFutureJupiterAge);
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

// solar age until
function tilAgeSubmit(){
  let myTilEarthAge = document.getElementById("earthAgeTilInput").value;
  let myFutureAge = document.getElementById("futureAgeInput").value;
  let myTilAge = new Age(myTilEarthAge);
  showTilSolarAge(myTilAge, myFutureAge);
  return myTilAge;
}

//listeners

window.addEventListener("load", () => {
  const solarAgeForm = document.getElementById("solarAge");
  const solarAgeSinceForm = document.getElementById("solarAgeSince");
  const solarAgeTilForm = document.getElementById("solarAgeTil");
  let myAge;
  let mySinceAge;
  let myTilAge;
  solarAgeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    myAge = currentAgeSubmit();
  });
  solarAgeSinceForm.addEventListener("submit", (event) => {
    event.preventDefault();
    mySinceAge = sinceAgeSubmit();
  });
  solarAgeTilForm.addEventListener("submit", (event) => {
    event.preventDefault();
    myTilAge = tilAgeSubmit();
  });
});
