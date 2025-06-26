function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let minimum = null; 
  let maximum = null; 

  for (let i = 0; i < nums.length; i++) {
    if (minimum === null) {
      minimum = nums[i];  
    } else {
      if (nums[i] < minimum) {
        minimum = nums[i];
      }
    }

    if (maximum === null) {
      maximum = nums[i];  
    } else {
      if (nums[i] > maximum) {
        maximum = nums[i];
      }
    }
    
  }

  return minimum + maximum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;