// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
	// This variable is for storing an array of every item in the argument that is not a vowel
	var noVowels = [];
	// This variable is for storing a new string of concatenated list items from noVowels array
	var newStr = [];
	// This for loop checks the current arguemnt item for a vowel and if none is detected it pushes the item into the noVowel array
	for (i = 0; i < str.length; i++) {
		if (str[i].toLowerCase().includes("i") !== true && str[i].toLowerCase().includes("o") !== true && str[i].toLowerCase().includes("u") !== true && str[i].toLowerCase().includes("a") !== true && str[i].toLowerCase().includes("e") !== true ) {
			noVowels.push(str[i])
		}
	}
	// This for loop concatenates the noVowels array into a new string
	for (i = 0; i < noVowels.length; i++) {
		newStr += noVowels[i];
	}
	return newStr;
}

console.log(disemvowel("This website is for losers LOL!"));