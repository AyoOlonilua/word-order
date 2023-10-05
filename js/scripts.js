// Business logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(text) {
  if (text.trim().length === 0) {
    return [];
  }

  const wordOrder = [];
  const wordArray = text.split(" ");

  wordArray.forEach(function(element) {
      const word = element.toLowerCase();

    if (word.trim() !== "") {
      if (wordOrder[element]) {
          wordOrder[element]++;
      } else {
          wordOrder[element] = 1;
      }
    }
  });
  return wordOrder;
}

function appendMostCommonWords(words) {
  $("#word-list").empty();
  words.forEach(function(element) {
        $("#word-list").append("<li>" + element.word + ": " + element.count + "</li>");
  });
}
// UI Logic

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    
    const passage = $("#text-passage").val();
    const wordCount = wordCounter(passage);
    const wordFrequency = numberOfOccurrencesInText(passage);
    
    appendMostCommonWords(Object.entries(wordFrequency).map(([word, count]) => ({ word, count })));
  $("#total-count").html(wordCount);
  });
});
