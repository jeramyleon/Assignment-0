function fizzBuzz(start, end) {
  // Insert code here;
  let fizzBuzzOutput = [];

  while (start <= end) {
    if (start % 3 === 0 && start % 5 === 0) {
      fizzBuzzOutput.push("FizzBuzz"); 
    } else if (start % 3 === 0 && start % 5 != 0) {
      fizzBuzzOutput.push("Fizz");
    } else if (start % 5 === 0 && start % 3 != 0) {
      fizzBuzzOutput.push("Buzz");
    } else {
      fizzBuzzOutput.push(start);
    }

    start++; 
  }

  return fizzBuzzOutput;
}

// Do not edit this line;
module.exports = fizzBuzz;