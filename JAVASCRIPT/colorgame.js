var colors = generateRandomColors(6);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var hardButton = document.querySelector("#hardbtn");
var easyButton = document.querySelector("#easybtn");
var numCol = 6;


hardButton.addEventListener("click", function(){
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numCol = 6;
  colors = generateRandomColors(numCol);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetColors();
  for(var i = 0; i < squares.length; i++){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  };
});

easyButton.addEventListener("click", function(){
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numCol = 3;
  colors = generateRandomColors(numCol);
  for(var i = 0; i < squares.length; i++){
    if(colors[i]) {
      squares[i].style.background = colors[i];
      pickedColor = pickColor();
      colorDisplay.textContent = pickedColor;
    }
    else {
      squares[i].style.display = "none";
    }
  };
});

resetButton.addEventListener("click", function(){
  resetButton.textContent = "NEW COLORS"
  colors = generateRandomColors(numCol);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.background =  "rgb(57, 137, 205)";
  message.textContent = "";
  resetColors();
});

colorDisplay.textContent = pickedColor;

resetColors();


function colorChange(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = pickedColor;
  };
};

function pickColor(){
  var random = Math.floor(Math.random() * (colors.length-1));
  return colors[random];
};

function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(generateColors());
  };
  return arr;
};

function generateColors(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", "+ g + ", " + b + ")";
};

function resetColors(){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.background;
      if(clickedColor === pickedColor){
        message.textContent = "Correct!";
        colorChange(clickedColor);
        h1.style.background = pickedColor;
        resetButton.textContent = "PLAY AGAIN?";
      }
      else {
        this.style.background = "#08061e";
        message.textContent = "Try again!";
      };
    });
  };
};
