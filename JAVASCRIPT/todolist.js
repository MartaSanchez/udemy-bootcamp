var todo = [];

var input = prompt("What you would like to do?");

while (input !== "quit") {
  if(input == "list") {
    listToDo();
  }
  else if (input == "add"){
    addToDo();
  }
  else if (input == "delete"){
    deleteToDo();
  }
  input = prompt("What you would like to do?");
}
console.log("You quit the app");


function listToDo() {
  console.log("##########")
  todo.forEach(function(todo, ind){
    console.log(ind + ": " + todo);
  });
  console.log("##########")
}

function addToDo() {
  var newTodo = prompt("add a new todo");
  todo.push(newTodo);
  alert("New todo added")
}

function deleteToDo() {
  var index = prompt("Enter index of todo to delete");
  todo.splice(index, 1);
  alert("Deleted todo")
}
