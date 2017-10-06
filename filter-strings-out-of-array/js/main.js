// Code wars challenge for filtering out strings from an array

// In this kata you will create a function that takes a list of non-negative integers and strings 
// and returns a new list with the strings filtered out.


// My solution here!

// function filter_list(l) {
// 	// Variable for container the returned answer
// 	var newList = [];
// 	// Variable I found neccessary for properly checking the type of the current list item
// 	var currentListItem;

// 	for (i = 0; i < l.length; i++) {
// 		// Updates variable with the current list item being checked
//   		currentListItem = l[i];
//   		// Checks if the currentListItem is a number using the typeof operator
//     	if (typeof currentListItem === 'number') {
//     		// If it is a number the currentListItem will be pushed to the new array. This line could also be newList.push(l[i]);
//     		newList.push(currentListItem); 
//     	} 
//   	}
//   	// Returns a new array without strings!
//   	return newList;
// }

// Best solution here!
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

// Code test
console.log(filter_list([1,2,'a','b','123']));


