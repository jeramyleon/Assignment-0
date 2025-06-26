class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    if (nums.length === 0) {
      return false;
    }

    const middleIndex = Math.floor(nums.length / 2);
    const middleValue = nums[middleIndex];

    if (middleValue === target) {
      return true; 
    }

    if (target < middleValue) {
      return this.binarySearch(nums.slice(0, middleIndex), target);
    } else if (target > middleValue) {
      return this.binarySearch(nums.slice(middleIndex + 1), target);
    }
  }

}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;