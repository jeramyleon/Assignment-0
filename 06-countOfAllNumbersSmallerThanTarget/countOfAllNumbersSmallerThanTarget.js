function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let smallerThanCount = 0;  

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      smallerThanCount++; 
    }
  }

  return smallerThanCount;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;