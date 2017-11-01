// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str){
	var splitStr = [];
	var splitSubString;
	var reverseArray;
	var joinArray;
  splitStr = str.split(' ');
  for (var i = 0; i < splitStr.length; i++) {
  	if (splitStr[i].length > 4) {
      splitSubString = splitStr[i].split("");
      reverseArray = splitSubString.reverse();
      joinArray = reverseArray.join("");
      splitStr[i] = joinArray
  	}
  }
  splitStr = splitStr.join(" ");
  return splitStr;
}

console.log(spinWords( "Hey fellow warriors" ));