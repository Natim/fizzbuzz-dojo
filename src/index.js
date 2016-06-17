function fizzbuzz(xyz) {
  if (typeof(xyz) !== 'number') {
    throw new Error(`${xyz} is not a number`);
  }
  
  if (xyz % 3 === 0 && xyz % 5 === 0) {
    return "fizzbuzz";
  }

  if (xyz % 5 === 0) {
    return "buzz";
  }

  if (xyz % 3 === 0) {
    return "fizz";
  }
  
  return xyz;
}

module.exports = {
  fizzbuzz,
};
