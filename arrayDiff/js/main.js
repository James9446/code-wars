// Your goal in this kata is to implement an difference function, which subtracts one list from another.

// It should remove all values from list a, which are present in list b.

function array_diff(a, b) {
  var diffArr = [];
  for (i = 0; i < a.length; i++) {
    if (a[i] != b) {
      diffArr.push(a[i]);
    }
  }
  return diffArr;
}

console.log(array_diff([0,1,1,2,3,1,4,1],[1]));