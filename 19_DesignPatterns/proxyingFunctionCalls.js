function multiply(a, b) {
  console.log(a * b);
}

function sum(a, b) {
  console.log(a + b);
}

const handler = {
  // Whenever the function is called
  // Validate, Logging, Authentication... 등에 사용 가능
  apply: function (targetFunc, thisArg, argsList) {
    console.log("You ran the function")
    console.log('argsList: ', argsList);
    console.log('This argument for the call: ', thisArg);
    targetFunc(...argsList)
  }
}

const multiplyProxy = new Proxy(multiply, handler)
console.log('multiplyProxy: ', multiplyProxy(4, 5));
const sumProxy = new Proxy(sum, handler)
console.log('sumProxy: ', sumProxy(1, 2));
