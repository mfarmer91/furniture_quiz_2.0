var quiz = new Quiz();


/*************************
Questions
************************/

var question_one = new Question("Which Danish furniture designer created the Chieftan Chair?");
var question_two = new Question("Charles and Ray Eames and George Nelson were employed by which American furniture manufacturer and retailer during mid-twentieth century?");
var question_three = new Question("What material is Japanese designer Shiro Kuramata most well-known for using in his furniture and decorative arts?");                        
                             
quiz.add(question_one);
//stores #question -- area where questions are rendered -- to questionElement variable.
  var questionElement = document.getElementById('question');
  //renders #question element with HTML text of question and loops through questions.
  quiz.renderInElement(questionElement);



/*************************
Guess0
************************/

var guess0_one = new Guess0("Finn Juhl"); //correct
var guess0_two = new Guess0("Knoll, Inc.");
var guess0_three = new Guess0("acrylic"); //correct

quiz.addGuess0(guess0_one);
var guess0Element = document.getElementById('choice0');
quiz.renderG0InElement(guess0Element);


/*************************
Guess1
************************/

var guess1_one = new Guess1("Eero Saarinen");
var guess1_two = new Guess1("Herman Miller"); //correct
var guess1_three = new Guess1("steel");  

quiz.addGuess1(guess1_one);
var guess1Element = document.getElementById('choice1');
quiz.renderG1InElement(guess1Element);

/*************************
Guess1
************************/

var progress1 = new Progress(1);
var progress2 = new Progress(2);
var progress3 = new Progress(3);  

quiz.addProgress(progress1);
var progressElement = document.getElementById('progress');
quiz.renderProgressInElement(progressElement);


//var correctElement = document.getElementById('overlay');
//quiz.renderNumberInElement(correctElement);



