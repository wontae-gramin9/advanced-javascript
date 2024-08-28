// f(a, b, c) → f(a)(b)(c)
function add3(a, b, c) {
  return a + b + c
}
// ↓
function addCurry(a) {
  return (b) => {
    return (c) => {
      return a + b + c
    }
  }
}
// 이걸 어디다가, 왜 쓰는가?
// any number of arguments도 가져올 수 있는 advanced버전이라면 쓸만하다
// 보통은 functional programming library를 사용한다.
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) { // fn.length = 함수의 args의 개수
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const curriedAdd = curry(add3);
console.log(curriedAdd(3, 4, 5));
console.log(curriedAdd(3)(4)(5));
const curriedAdd10 = curriedAdd(10)
const curriedAdd7 = curriedAdd(3)(4)
console.log('25: ', curriedAdd10(5, 10));
console.log('11: ', curriedAdd7(4));
