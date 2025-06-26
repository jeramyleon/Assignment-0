function isPalindrome(word) {
  // Insert code here;
  let reversedWord = word.split("").reverse().join("");
  
  if (word === reversedWord) {
    return true; 
  } else {
    return false;
  }
}

// Do not edit this line;
module.exports = isPalindrome;