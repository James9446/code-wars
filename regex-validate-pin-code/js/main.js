// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
	// for loop checks to make sue the string only contains number characters
	for (i = 0; i < pin.length; i++) {
		if (isNaN(pin[i]) || pin[i] === " ") {
			return false
		} 
	}
	// conditional checks to make sure pin is either exactly 4 charcters or 6 characters
	if (pin.length === 4 || pin.length === 6) {
		return true
	} else {
		return false
	}
}