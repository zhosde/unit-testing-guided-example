function sum(a, b) {
  if (typeof a === 'number' && typeof b !== 'number'){
    return a+0}
  else if (typeof b !== 'number' && typeof a === 'number'){
    return b+0
  }
  else if (typeof a !== 'number' && typeof b !== 'number') {
     return 0}
  else {return a + b};
    }
  


function subtract(a, b) {
  if (typeof a === 'number' && typeof b !== 'number'){
    return a-0}
  else if (typeof b !== 'number' && typeof a === 'number') {
    return b-0
  }
  else if (typeof a !== 'number' && typeof b !== 'number') {
     return 0}
  else {return a - b};
}

function divide(a, b) {
  if (b===0){
    throw new Error('An explanatory error message')}
    else {
      return a / b
    }
  }


function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
