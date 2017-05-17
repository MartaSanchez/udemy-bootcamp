var b = document.querySelector("button");
var c = document.querySelector("body");


c.style.background = randomColor();

b.addEventListener("click", function(){
  c.style.background = randomColor();
});



function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var color = "rgb(" + r + ", " + g + ", " + b + ")";
  return color
};
