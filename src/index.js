import Age from './../src/Age.js';

//show results
function showSolarAge(myAge){
  let newEarthAge = document.createElement("li");
  newEarthAge.innerText =  "You are " + myAge.earthAge + " Earth years old.";
  document.getElementById("showAges").append(newEarthAge);
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
