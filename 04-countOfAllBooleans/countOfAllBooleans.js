function countOfAllBooleans(arr) {
  // Insert code here;
  let booleanCount = 0; 
  // loop through array 
  // if element is boolean, add 1 to booleanCount 
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'boolean') {
      booleanCount++; 
    }
  }

  return booleanCount; 
}

// Do not edit this line;
module.exports = countOfAllBooleans;