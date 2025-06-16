function titleCaseEdit(title) {
  // Insert code here;
  words = title.split(' '); 
  capitalizedWords = words.map(word => {
    if (word.length === 0) return ''; 

    firstLetter = word.charAt(0).toUpperCase();
    restOfWord = word.slice(1).toLowerCase();

    return firstLetter + restOfWord; 
  });

  return capitalizedWords.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;