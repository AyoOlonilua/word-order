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
      if (wordOrder[word]) {
          wordOrder[word]++;
      } else {
          wordOrder[word] = 1;
      }
    }
  });
  return wordOrder;
}

// UI Logic

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    
    const passage = $("#text-passage").val();
    const wordCount = wordCounter(passage);
    const wordFrequency = numberOfOccurrencesInText(passage);

    for (const word in wordFrequency) {
       wordFrequency.hasOwnProperty(word) 
       const count = wordFrequency[word];
        $("#word-list").append("<li>" + word + ": " + count + "</li>");
      
    }
  
  $("#total-count").html(wordCount);
  });
});
