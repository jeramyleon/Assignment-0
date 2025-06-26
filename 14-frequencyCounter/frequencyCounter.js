function frequencyCounter(word) {
  // Insert code here;
  let frequencyofLetters = {}; 
  let letters = word.split("");

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] in frequencyofLetters) {
      let key = letters[i]; 
      frequencyofLetters[key]++; 
    } else {
      let key = letters[i];
      frequencyofLetters[key] = 1; 
    }
  }

  return frequencyofLetters;
}

// Do not edit this line;
module.exports = frequencyCounter;
