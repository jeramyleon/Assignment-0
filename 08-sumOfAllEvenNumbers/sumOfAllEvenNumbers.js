function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let evenNumberCount = 0; 

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenNumberCount++;
    }
  }

  return evenNumberCount;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;