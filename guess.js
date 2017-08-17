function Guess0(guess){
  this.guess = guess;
};

Guess0.prototype.toHTML = function() {
  var htmlString = '<p';
//  if (this.isPlaying) {
//    htmlString += ' class="current"';
//    }
  htmlString += '>';
  htmlString += this.guess;
  htmlString += '</p>';
  return htmlString;
};

function Guess1(guess){
  this.guess = guess;
};

Guess1.prototype.toHTML = function() {
  var htmlString = '<p';
//  if (this.isPlaying) {
//    htmlString += ' class="current"';
//    }
  htmlString += '>';
  htmlString += this.guess;
  htmlString += '</p>';
  return htmlString;
};
