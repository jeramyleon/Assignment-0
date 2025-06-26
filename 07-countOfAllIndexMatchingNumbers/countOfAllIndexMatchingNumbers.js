function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let matchingNumCount = 0; 
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i) {
      matchingNumCount++; 
    }
  }

  return matchingNumCount; 
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;