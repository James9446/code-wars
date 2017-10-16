function encrypt(text, n) {
	var newStr = [];
	var encryptedString = [];
	var stringFirstHalf = [];
	var stringSecondHalf = [];
	var stringCount = 0;
	var evenOrNot = 0;
	for (i = 0; i < text.length; i++)
	{
		stringCount += 1;
		evenOrNot = stringCount % n;
		// console.log("String count "+ stringCount + "");
		console.log(stringCount)
		console.log(evenOrNot);
		// console.log(evenOrNot );
		// console.log(stringCount)
		// console.log(n)
		// if (evenOrNot % 2 === 0 ) {
			
		// }
		// console.log(stringCount % n)
		if (evenOrNot === 0) {
			stringSecondHalf.push(text[i]);
			console.log("Function working")
		} else {
			stringFirstHalf.push(text[i]);
		}
		console.log(stringFirstHalf);
		console.log (stringSecondHalf);
	}
	newStr = stringFirstHalf + stringSecondHalf;

	for (i = 0; i < newStr.length; i++) {
		encryptedString += newStr[i];
	}
	console.log(newStr);
	return encryptedString;
}

// function decrypt(encryptedText, n) {

// }

// console.log(encrypt("This is a test!", 1)); // "hsi  etTi sats!"
// console.log(encrypt("This is a test!", 2)); // "s eT ashi tist!"