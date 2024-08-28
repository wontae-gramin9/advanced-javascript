// FIRST CLASS FUNCTION
// In js, function is first class objects, which means it is just an object
// can become args, return value, put into a variale
const func = function (person) {
  console.log(`Hi, ${person}.`);
}

func("James")

const funcs = [
  function (person) {
    console.log(`Hi, ${person}.`);
  },
  function (person) {
    console.log(`I hate you, ${person}.`);
  }
]

function callWithBlue(func) {
  func("Wontae")
}

console.log(callWithBlue(funcs[0]))

