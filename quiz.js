var $overlay = $('<div id ="overlay"></div>');
$("body").append($overlay);
$overlay.hide();


function Quiz(){
  this.questions = [];
  this.guess0 = [];
  this.guess1 = [];
  this.progress = [];
  this.questionIndex = 0;
  this.guessIndex0 = 0;
  this.guessIndex1 = 0;
  this.progressIndex = 0;
  this.correctIndex = 0;
  this.correct = 0; 
};

//var $gameOver = $('<p id="game_over">Game Over: You got <span id="numCorrect"></span>questions correct. <p>');
//
//$overlay.append($gameOver);



/*************************
Question prototypes
************************/

Quiz.prototype.add = function(question) {
  this.questions.push(question);
};

Quiz.prototype.remove = function() {
  this.questions.shift();
};

Quiz.prototype.next = function() {
  this.questionIndex++;
    if (this.questionIndex === 1){
      quiz.remove();
      quiz.add(question_two);
      questionElement = document.getElementById('question');
      quiz.renderInElement(questionElement);
    }
  
  if (this.questionIndex === 2){
    quiz.remove();
    quiz.add(question_three);
    questionElement = document.getElementById('question');
    quiz.renderInElement(questionElement); 
  }
};

Quiz.prototype.renderInElement = function(list) {
  list.innerHTML = "";
    for (var i = 0; i < this.questions.length; i++) {
    list.innerHTML += this.questions[i].toHTML();
  }
};

/*************************
Correct prototypes
************************/

Quiz.prototype.updateCorrectG0 = function(){
  if(this.questionIndex === 0)
  {
     this.correct++;
  }

  if(this.questionIndex === 2)
  {
    this.correct++;
  }
};

Quiz.prototype.updateCorrectG1 = function(){
   if(this.questionIndex === 1)
  {
    this.correct++;
  }
  
  if(this.questionIndex === 2)
  {

  }
};

/*************************
Game Over prototypes
************************/

//Quiz.prototype.renderNumberInElement = function(numCorrect) {
//  numCorrect.innerHTML = "";
//  numCorrect.innerHTML += this.correct.toHTML();
//};





/*************************
Guess0 prototypes
************************/

Quiz.prototype.addGuess0 = function(guess){
  this.guess0.push(guess);
};

Quiz.prototype.removeGuess0 = function() {
  this.guess0.shift();
};

Quiz.prototype.nextGuess0 = function() {
  this.guessIndex0++;
    if (this.guessIndex0 === 1){
      quiz.removeGuess0();
      quiz.addGuess0(guess0_two);
      guess0Element = document.getElementById('choice0');
      quiz.renderG0InElement(guess0Element);
    }
  
  if (this.guessIndex0 === 2){
    quiz.removeGuess0();
    quiz.addGuess0(guess0_three);
    guess0Element = document.getElementById('choice0');
    quiz.renderG0InElement(guess0Element); 
  }
};

Quiz.prototype.renderG0InElement = function(list) {
  list.innerHTML = "";
    for (var i = 0; i < this.guess0.length; i++) {
    list.innerHTML += this.guess0[i].toHTML();
  }
};

  
  
/*************************
Guess1 prototypes
************************/
  
Quiz.prototype.addGuess1 = function(guess){
  this.guess1.push(guess);
};

Quiz.prototype.removeGuess1 = function() {
  this.guess1.shift();
};

Quiz.prototype.nextGuess1 = function() {
  this.guessIndex1++;
    if (this.guessIndex1 === 1){
      quiz.removeGuess1();
      quiz.addGuess1(guess1_two);
      guess1Element = document.getElementById('choice1');
      quiz.renderG1InElement(guess1Element);
    }
  
  if (this.guessIndex1 === 2){
    quiz.removeGuess1();
    quiz.addGuess1(guess1_three);
    guess1Element = document.getElementById('choice1');
    quiz.renderG1InElement(guess1Element); 
  }
};

Quiz.prototype.renderG1InElement = function(list) {
  list.innerHTML = "";
    for (var i = 0; i < this.guess1.length; i++) {
    list.innerHTML += this.guess1[i].toHTML();
  }
};

/*************************
Progress prototypes
************************/
  
Quiz.prototype.addProgress = function(question){
  this.progress.push(question);
};

Quiz.prototype.removeProgress = function() {
  this.progress.shift();
};

Quiz.prototype.nextProgress = function() {
  this.progressIndex++;
    if (this.progressIndex === 1){
      quiz.removeProgress();
      quiz.addProgress(progress2);
      progressElement = document.getElementById('progress');
      quiz.renderProgressInElement(progressElement);
    }
  
  if (this.progressIndex === 2){
    quiz.removeProgress();
    quiz.addProgress(progress3);
    progressElement = document.getElementById('progress');
    quiz.renderProgressInElement(progressElement); 
  }
};

Quiz.prototype.renderProgressInElement = function(list) {
  list.innerHTML = "";
    for (var i = 0; i < this.progress.length; i++) {
    list.innerHTML += this.progress[i].toHTML();
  }
};

Quiz.prototype.overlay = function(){
  if(this.questionIndex === 3)
  {
    var joints = this.correct;
    $("button").click(function(event){
    $overlay.show();
    var htmlString = '<span id="game_over"';
    htmlString += '> Game Over: You answered ';
    htmlString += joints; //wow, was frustrated and just put that in, and it worked lol.  joints.
    htmlString += ' questions correctly.'
    htmlString += '</span>';
    $overlay.append(htmlString);  
 });
  }
};













