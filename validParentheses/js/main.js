// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.

// This solution passes the code wars kata but it is too simple. It only checks for the correct number of right and left parenthesis. 
// It is possible to have them in the wrong order and still be validated by this function. 
function validParentheses(parens){
	var count = 0;
  for (var i = 0; i < parens.length; i++) {
  	if (parens[0] === ')' || parens[parens.length -1] === "(") {
  		return false;
  	} 
  	if (parens[i] === "(") {
  		count++;
  	}
  	if (parens[i] === ")") {
  		count--;
  	}
  }
	if (count === 0) {
		return true;
	} else {
		return false;
	}
}

// Here is an example that should be false be will show true
console.log(validParentheses("())()(()"));

console.log(validParentheses("(())((()())())")); // should true
console.log(validParentheses(")(()))")); // should be false
console.log(validParentheses("())")); // should be false

