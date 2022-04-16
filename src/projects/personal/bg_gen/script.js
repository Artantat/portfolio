var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rndBtn = document.getElementById("randomcolors");

function getRandomValue(max){
  return Math.floor(Math.random() * max);
}

function getRandomColor(){
  return "#" +
    getRandomValue(256).toString(16) +
    getRandomValue(256).toString(16) +
    getRandomValue(256).toString(16);
}

function setGradient(){
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

rndBtn.addEventListener("click", function(){
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
})
