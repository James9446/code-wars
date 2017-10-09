function encrypt(text, n) {
	var encryptedString = [];
	var stringFirstHalf = [];
	var stringSecondHalf = [];
	var stringCount = 0;
	for (i = 0; i < text.length; i++)
	{
		stringCount += 1;
		// console.log(stringCount)
		// console.log(n)
		console.log(stringCount / n)
		if ((stringCount / n) === 0) {
			stringSecondHalf.push(text[i]);
		} else {
			stringFirstHalf.push(text[i]);
		}
		console.log(stringFirstHalf);
		console.log (stringSecondHalf);
	}
	encryptedString = stringFirstHalf + stringSecondHalf;
	return encryptedString
}

// function decrypt(encryptedText, n) {

// }

console.log(encrypt("This is a test!", 3));