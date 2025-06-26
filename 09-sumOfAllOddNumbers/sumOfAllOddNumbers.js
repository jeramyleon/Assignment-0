function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let oddNumberCount = 0; 

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != 0) {
      oddNumberCount++;
    }
  }

  return oddNumberCount;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;