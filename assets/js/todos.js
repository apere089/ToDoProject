//Toggle class to check items off/on To-Do list
$("ul").on("click", "li", function(){
  $(this).toggleClass("done");
});
//Remove items from To-Do list by clicking X
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});
//Add new items on To-Do list from text input
$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});