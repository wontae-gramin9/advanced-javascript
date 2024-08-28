// PURE FUCNTIONS
// deterministic for a given input
// same output for a same input
// should not depend on any mutable state
// side effect(I/O, modifying a object, reassigning a variable) free
let value = 2
function squareAndUpdateValue(num) {
  // Impure function, as it updates "value" variable
  value = num ** 2
  return value
}
console.log('squareAndUpdateValue: ', squareAndUpdateValue(3));
console.log('value: ', value);

// PURE FUNCTION WOULD BE...
function square(num) {
  return num ** 2
}

// IMPURE
let colors = ["red", " orange"]
function addToArray(arr, value) {
  return arr.push(value)
}
console.log('addToArray: ', addToArray(colors, "blue"));
console.log('colors: ', colors);
// PURE FUNCTION WOULD BE...
const pureAddToArray = (arr, value) => ([...arr, value])
