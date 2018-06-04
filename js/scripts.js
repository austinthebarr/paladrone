


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var splitSentence = person1Input.split(" ");

    splitSentence.forEach(function(word) {
      if (word.length >= 3) {
        $(".person1").append("<li>"+word + "</li>");
      }
    })

    event.preventDefault();
  });
});
