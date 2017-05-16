var colors = generateRandomColors(6);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.background;
    if(clickedColor === pickedColor){
      message.textContent = "Correct!";
      colorChange(clickedColor);
      h1.style.background = pickedColor;
    }
    else {
      this.style.background = "#2b1d27";
      message.textContent = "Try again!";
    };
  });
}


function colorChange(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = pickedColor;
  };
};

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i <= num; i++){
    arr.push(generateColors());
  }
  return arr;
};

function generateColors(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", "+ g + ", " + b + ")";
};