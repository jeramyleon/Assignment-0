function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  const mergedSet = new Set();

  for (let i = 0; i < args.length; i++) {
    args[i].forEach(num => {
      mergedSet.add(num);
    });
  }

  return mergedSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;