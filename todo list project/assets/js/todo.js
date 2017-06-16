$("ul").on("click", "li", function(){
  $(this).toggleClass("done");
});
 // click X to delete a li
 $("ul").on("click","span", function(event){
   $(this).parent().fadeOut(600, function(){
     $(this).remove();
   });
   event.stopPropagation();
 });

var icono= '<i class="fa fa-trash" aria-hidden="true"></i>'

 $("input[type=text]").keypress(function(event){
   if(event.which === 13){
     var newTodo = $(this).val();
     $(this).val("");
     $("ul").append('<li><span>'+ icono + ' ' + '</span>' + newTodo + '</li>');
   }
 });

$(".icono1").click(function(){
  $("input[type=text]").fadeToggle();
});
