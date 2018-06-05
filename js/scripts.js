


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    debugger;
    //var person1Input = $("input#person1").val();
    //var splittedSentence = person1Input.toLowerCase().split("");
    var word = $("input#person1").val().split("");
    //var splitWord = word.split(" ");
    var reverseWord = word.slice();
    reverseWord.reverse();
    // var reverseWord = word.reverse();

      if (reverseWord.toString() === word.toString()) {
        alert("palindrome!");
      };



    /* forEach loop
    var splitSentence = person1Input.split(" ");
    var reverseSentence = splitSentence.reverse();

    splitSentence.forEach(function(word) {
      if (word.length < 3) {
        $(".person1").append("<li>"+ word + "</li>");
      }
    })

    reverseSentence.forEach(function(word) {
      if (word.length < 10) {
        $(".person1").append("<li>"+ word + "</li>");
      }
    })
*/

/* For LOOP
  for (var i = 0; i < splittedSentence.length; i++){
    if (splittedSentence[i] === "a" || splittedSentence[i] === "e" || splittedSentence[i] === "i" || splittedSentence[i] === "o" || splittedSentence[i] === "u"){
      splittedSentence[i] = "-";
    }
  }

  $(".person1").append("<li>"+ splittedSentence.join("") + "</li>");
*/
    event.preventDefault();
  });
});
