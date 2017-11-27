// Pig Latin is an English language game where the goal is to hide the meaning of a word from people not aware of the rules.

// The rules themselves are rather easy:

// 1) The word starts with a vowel(a,e,i,o,u) -> return the original string plus "way".

// 2) The word starts with a consonant -> move consonants from the beginning of the word to the end of the word until the first vowel, then return it plus "ay".

// 3) The result must be lowercase, regardless of the case of the input. If the input string has any non-alpha characters, the function must return None, null, Nothing (depending on the language).

// 4) The function must also handle simple random strings and not just English words.

// 5) The input string has no vowels -> return the original string plus "ay".

// For example, the word "spaghetti" becomes "aghettispay" because the first two letters ("sp") are consonants, so they are moved to the end of the string and "ay" is appended.

// function pigLatin(string){
// 	var pigString = [];
//   for (i = 0; i < string.length; i++) {
//   	console.log(string[i]);
//   	if (string[0] === "a" || string[0] === "e" || string[0] === "i" || string[0] === "o" || string[0] === "u") {
//   		return string + "way"
//   	} else if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
//   		// console.log(string[i]);
//   		string.split(string[i]);
//   		return string;
//   	}
//   }
// }

function pigLatin(string) {
  var pigTail= [];
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "0" || string[i] === "1" || string[i] === "2" || string[i] === "3" || string[i] === "4" || string[i] === "5" || string[i] === "6" || string[i] === "7" || string[i] === "8" || string[i] === "9") {
      return null;
    }
  }
  if (string[0] === "a" || string[0] === "e" || string[0] === "i" || string[0] === "o" || string[0] === "u") {
   return string + "way"
  }
  for (i = 0; i < string.length; i ++) {
    if (string[i] !== "a" || string[i] !== "e" || string[i] !== "i" || string[i] !== "o" || string[i] !== "u") {
      return string + "ay"
    }
  }
  string = string.split('');
  for (i = 0; i < string.length; i++) {
    if (string[0] !== "a" && string[0] !== "e" && string[0] !== "i" && string[0] !== "o" && string[0] !== "u") {
      pigTail += string.shift(0);
      string.push(pigTail);
    } else if (string[0] === "a" || string[0] === "e" || string[0] === "i" || string[0] === "o" || string[0] === "u") {
      string = string.join('');
      return string + "ay";
    }
  }
}

console.log(pigLatin("spaghetti"));
console.log(pigLatin("tes3t5"));
console.log(pigLatin("SCHub"));
console.log(pigLatin("cccc"));


