var b = document.querySelector("button");
var c = document.querySelector("body");


c.style.background = "white";

b.addEventListener("click", function(){
  if(c.style.background == "white"){
    c.style.background = "blue";
  }
  else {
    c.style.background = "white"
  }
})
