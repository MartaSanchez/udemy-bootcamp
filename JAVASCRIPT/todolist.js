var todo = [];

var input = prompt("What you would like to do?");

while (input !== "quit") {
  if(input == "list") {
    console.log(todo);
  }
  else if (input == "add"){
    var newTodo = prompt("add a new to do");
    todo.push(newTodo);
  }
  else if (input == "delete"){
    todo.pop();
    alert("You deleted the last item on the list");
  }
  input = prompt("What you would like to do?");
}
console.log("You quit the app");
