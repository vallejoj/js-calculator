/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule(x) {
  var memory = 0;
  var total = 0;
  var calculator = {};


  function load(x) {
    if (typeof x === "number") {
      total = x;
      return total;
    } else {
    alert("error!!!");
    }
  }

  function getTotal() {
    return total;
  }

  function add(x) {
    if (typeof x === "number") {
    var num = x;
    total += x;
    return total;
  } else {
  alert("error!!!");
  }
  }

  function subtract(x) {
    if (typeof x === "number") {
    var num = x;
    total -= x;
    return total;
  } else {
  alert("error!!!");
  }
  }

  function multiply(x) {
    if (typeof x === "number") {
    var num = x;
    total *= x;
    return total;
  } else {
  alert("error!!!");
  }
  }

  function divide(x) {
    if (typeof x === "number") {
    var num = x;
    total /= x;
    return total;
  } else {
  alert("error!!!");
  }
  }

  function recallMemory() {
    return memory;
  }

  function saveMemory() {
    memory = total;
    return memory;
  }

  function clearMemory() {
    memory = 0;
    return memory;
  }
  return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory,
  }

}

/**
 * Clear the value stored at `memory`
 */

/**
 * Validation
 */
