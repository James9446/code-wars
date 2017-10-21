// Write a function that accepts a string, and returns true if it is in the form of a phone number. 
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses) 

function validPhoneNumber(phoneNumber){
	if (phoneNumber.length === 14 && isNaN(phoneNumber[1]) === false && isNaN(phoneNumber[2]) === false && isNaN(phoneNumber[3]) === false && isNaN(phoneNumber[6]) === false && isNaN(phoneNumber[7]) === false && isNaN(phoneNumber[8]) === false && isNaN(phoneNumber[10]) === false && isNaN(phoneNumber[11]) === false && isNaN(phoneNumber[12]) === false && isNaN(phoneNumber[13]) === false && phoneNumber[0] === "(" && phoneNumber[4] === ")" && phoneNumber[5] === " " && phoneNumber[9] === "-") {
	  return true;
	} else {
	  return false;
  }
}



console.log(validPhoneNumber("(123) 456-7890"));  // =>  returns true
console.log(validPhoneNumber("(1111)555 2345"));  // => returns false
// validPhoneNumber("(098) 123 4567")  // => returns false