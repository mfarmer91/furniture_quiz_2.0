function Question(question){
  this.question = question;
};

Question.prototype.toHTML = function() {
  var htmlString = '<p';
  htmlString += '>';
  htmlString += this.question;
  htmlString += '</p>';
  return htmlString;
};

function Progress(question){
  this.question = question;
};

Progress.prototype.toHTML = function(){
  var htmlString = '<span';
  htmlString += '> Question ';
  htmlString += this.question;
  htmlString += ' of 3'
  htmlString += '</span>';
  return htmlString;
}

function Number(number){
 this.number = number;
}

Number.prototype.toHTML = function(){
  var htmlString = '<span id="game_over"';
  htmlString += '> Game Over: You answered ';
  htmlString += this.number;
  htmlString += ' questions correctly.'
  htmlString += '</span>';
  return htmlString;
}





