const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArr) {
	return numArr.reduce((total, num) => total + num, 0)
};

const multiply = function(numArr) {
  return numArr.reduce((product, num) => product * num, 1)
};

const power = function(num, exp) {
	let product = 1;
  for(let i = 0; i < exp; i++){
    product *= num;
  }
  return product;
};

const factorial = function(num) {
	if(num == 0 || num == 1){
    return 1;
  }else
  {
    let product = num;
    for(let i = num - 1; i > 1; i--){
      product *= i;
    }
    return product;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
