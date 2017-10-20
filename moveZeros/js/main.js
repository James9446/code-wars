// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
	var noZeros = [];
	var justZeros = [];
  for (i = 0; i < arr.length; i++) {
  	if (arr[i] !== 0) {
  		noZeros.push(arr[i]);
  		// console.log(arr)
  	} else {
  		justZeros.push(arr[i]);
  	}
  }
  var zerosAtBack = noZeros.concat(justZeros);
  return zerosAtBack;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // => returns[false,1,1,2,1,3,"a",0,0]
