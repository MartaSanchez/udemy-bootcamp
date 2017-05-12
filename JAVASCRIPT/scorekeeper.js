var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");
var p1Display = document.querySelector("#p1score");
var p2Display = document.querySelector ("#p2score");
var reset = document.querySelector("#reset");
var nInput = document.querySelector("input");
var changeinput = document.querySelector("p span")
var player1score = 0;
var player2score = 0;
var gameOver = false;
var winningScore = 5;



player1.addEventListener("click", function(){
  if(!gameOver){
    player1score++;
    p1Display.textContent = player1score;
  }
  if (player1score === winningScore){
    p1Display.classList.add("winner");
    gameOver = true;
  }
});

player2.addEventListener("click", function(){
  if (!gameOver){
    player2score++;
    p2Display.textContent = player2score;
  }
  if (player2score === winningScore){
    p2Display.classList.add("winner");
    gameOver = true;
  }
});


function begin(){
  player1score = 0;
  player2score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
};


reset.addEventListener("click", function(){
  begin();
});


nInput.addEventListener("change", function(){
  changeinput.textContent = this.value;
  winningScore = Number(this.value);
  begin();
});
