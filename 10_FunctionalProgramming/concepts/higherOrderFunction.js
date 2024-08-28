// HIGHER ORDER FUNCTION
// 도 fisrt class function이지만, 보통 function을 return할 때 이 용어를 쓴다
// A function that recieves another function as an argument, returns a function or does both
function doTwice(func) {
  func()
  func()
}

doTwice(() => { console.log("Hello") })

function multiplyBy(factor) {
  // closure를 이용한 은닉화?
  return function (number) {
    return number * factor
  }
}

const double = multiplyBy(2) // closure로 factory function을 만듦
const triple = multiplyBy(3)
console.log('double: ', double(10));
console.log('tripple: ', triple(20));
