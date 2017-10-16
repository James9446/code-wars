// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.
// getMiddle("testing") should return "t"

function getMiddle(s) {
  var index = s.length / 2
  if (s.length % 2 === 0) {
  	return s.slice(index - 1, index + 1);
  } else {
  	return s.slice(index - 0.5, index + 0.5);
  }
}

console.log(getMiddle("testi"));