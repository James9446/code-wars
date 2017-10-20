// Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
	var splitArray = str.split(" ");
	var reversedArray = [];
	for (i = 0; i < splitArray.length; i++) {
		reversedArray.unshift(splitArray[i]);
	}
	reversedArray = reversedArray.join(" ");
  return reversedArray; 
}


console.log(reverseWords("The greatest victory is that which requires no battle"));
// should return "battle no requires which that is victory greatest The"