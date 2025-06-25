function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let booleanAndStringCount = 0;

  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === 'boolean') {
      booleanAndStringCount++; 
    }

    if (typeof arr[i] === 'string') {
      booleanAndStringCount++;
    }

  }
  
  return booleanAndStringCount;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;