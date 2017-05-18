/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {
  var memory=0;
  var total= 0;
  var calculator={};

  function load(x){
    total=x;
    return total;
  }
  function getTotal(){
return total
  }
  function add(x){
    var num= x
    total+=x
return total
  }
  function subtract(x){
    var num= x
    total-=x
return total
  }
  function multiply(x){
    var num= x
    total*=x
return total
  }
  function divide(x){
    var num= x
    total/=x
return total
  }
  function recallMemory(){
    return memory;
  }
  function saveMemory(){
   memory=total;
   return memory;
  }
  return {
    load:load,
    getTotal:getTotal,
    add:add,
    subtract:subtract,
    multiply:multiply,
    divide:divide,
    recallMemory:recallMemory,
    saveMemory:saveMemory,
  }

}





  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */
