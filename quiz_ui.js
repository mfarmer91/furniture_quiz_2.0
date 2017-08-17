var guessZero = document.getElementById('guess0');
guessZero.onclick = function() {
  quiz.updateCorrectG0();
  quiz.next();
  quiz.nextGuess0();
  quiz.nextGuess1();
  quiz.nextProgress();
  quiz.overlay();
};

var guessOne = document.getElementById('guess1');
guessOne.onclick = function() {
  quiz.updateCorrectG1();
  quiz.next();
  quiz.nextGuess0();
  quiz.nextGuess1();
  quiz.nextProgress();
  quiz.overlay();
};


