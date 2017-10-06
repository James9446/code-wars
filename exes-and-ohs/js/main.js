// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contains any char.

function XO(str) {
	// Variable for holding all the x's
	var strX = [];
	// Variable for holding all the o's
	var strO = [];
	// For loop searchess the argument
    for (i = 0; i < str.length; i++) {
    	// Current list item is set to lower case and checked to see if it is an "x"
    	if (str[i].toLowerCase() === "x") {
    		// If it is an "x" it is pushed to the strX variable
    		strX.push(str[i]);
    	// Current list item is set to lower case and checked to see if it is an "o"
    	} else if (str[i].toLowerCase() === "o") {
    		// If it is an "o" it is pushed to the strO variable
    		strO.push(str[i]);
    	}
    }
    // The length of strX is compared to the length of strO
    // In other words the number of x's is compared to the number of o's
    if (strX.length === strO.length) {
    	// If they are the same the function returns true
    	return true
    } else {
    	// If they are not the same the function returns false
    	return false
    }
}


// Function tests
console.log(XO("xo")); // True
console.log(XO("xxOo")); // True
console.log(XO("xxxm")); // False
console.log(XO("Oo")); // False
console.log(XO("ooom")); // False
