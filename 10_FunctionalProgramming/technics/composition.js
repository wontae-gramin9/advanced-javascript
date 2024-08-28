// Function composition
// combining multiple functions to build a more complicated one
// becomes a pipeline, chaining args and return values
const add = (a, b) => a + b
const double = (a) => a * 2
const square = (a) => a * a

// 새로운 함수를 만들기
const addAndSquare = (a, b) => square(add(1, 3))

function compose(fn1, fn2) {
  return function (val) {
    return fn1(fn2(val)); // f(g(x))
  };
}

// Built-in의 wrapper메소드를 만들어 주면
// composition이 더 유용하다. 
// arg는 하나만 쓰일 수 있도록 함수를 잘게 쪼개야 한다
function joinWithDash(arr) {
  return arr.join('-')
}
function splitWords(str) {
  return str.split(' ')
}
function repeatTwice(str) {
  return str.repeat(2);
}
function upperCaseString(str) {
  return str.toUpperCase();
}

const repeatAndUppercase = compose(repeatTwice, upperCaseString);
const doubleAndThenSquare = compose(square, double);

// 3개, 4개를 합치고 싶다면 어떻게 해야할까?
function multiCompose(...functions) {
  return function (value) { // 초기값
    // reduce랑 똑같은데, 방향이 왼 ← 오 일뿐
    return functions.reduceRight((acc, func) => func(acc), value)
  };
}

const sluggify = multiCompose(
  joinWithDash,
  splitWords,
  upperCaseString
)
console.log('sluggify: ', sluggify('fancy product 12'));

