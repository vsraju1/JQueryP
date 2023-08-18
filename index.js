$(document).keypress(function(event){
    $("h1").css("text-transform", "uppercase");
    $("h1").css("font-size", "5rem");
    $("h1").css("color", "white");
    $("h1").text(event.key); 
});

