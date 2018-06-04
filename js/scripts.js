$(function () {

  var array = [];

  $("#formOne").submit(function(event){
    var item = $("#item").val();
    array.push(item);


    array.sort();



    $("#story").show();

    event.preventDefault();
  })
})
