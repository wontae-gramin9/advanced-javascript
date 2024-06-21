// Closure: function that is defined inside a function
// that has access to the outer function's variable
function outerFunction() {
  let outerVariable = "I am from outer"
  function innerFunction() {
    console.log("I am the inner function")
    // lexical scope
    console.log('outerVariable: ', outerVariable);
  }
  return innerFunction
}

const myClosure = outerFunction()
console.log('myClosure: ', myClosure());

function idGenerator() {
  let count = 1
  return function generate() {
    return count++
  }
}

const nextId = idGenerator()
console.log('nextId: ', nextId());
console.log('nextId: ', nextId());
console.log('nextId: ', nextId());
console.log('nextId: ', nextId());
console.log('nextId: ', nextId());

// 이게 global을 polute한다면 이렇게 사용한다
// var로 선언했다면 window.countGP 가 있다
let countGP = 1
function nextIdGp() {
  return countGP++
}
console.log('nextIdGp: ', nextIdGp());

// 여기에 IIFE를 같이 써주면 Module pattern이 된다.
function createCounter() {
  let count = 0
  // closure로 parent function의 variable에 accessible하다
  return {
    increment: function () {
      return count++
    },
    decrement: function () {
      return count--
    },
    getCount: function () {
      return count
    },
  }
}

const counter = createCounter()
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.getCount())
// 함수의 property를 바로 접근할 수 없다
console.log(counter.count)

// Factory function
function createExponentFunction(exp) {
  // private variable를 넣어놓는게 아니라
  // argument를 closure를 사용해서 factory처럼 사용할 수 있다.
  return function (val) {
    return val ** exp
  }
}

const square = createExponentFunction(2)
const cube = createExponentFunction(3)

function uniqueIdGenerator(prefix) {
  let id = 0
  return function () {
    return `${prefix}${++id}`
  }
}

const getBookId = uniqueIdGenerator('book_')
const getUserId = uniqueIdGenerator('user_')

console.log(getBookId())
console.log(getBookId())
console.log(getBookId())
console.log(getBookId())
console.log(getUserId())
console.log(getUserId())
console.log(getUserId())

// Event lister that has some state to be updated
let count = 0
document.getElementById('btn1').addEventListener('click', function () {
  console.log(`You clicked me ${++count} times.`)
})

// Closure없이는 global space가 오염되고, 다른 버튼이 access할수도 있다
// Closure사용하는 방법
document.getElementById('btn2').addEventListener(
  'click',
  // IIFE
  (function () {
    let count = 0
    return function () {
      console.log(`You clicked me ${++count} times.`)
    }
  })()
)

// 버튼이 3개가 있고 각각의 count를 갖게하고 싶으면, cnt1, cnt2, cnt3로 선언할 수 있겠지만
function createCounterButton(id) {
  const btn = document.getElementById(id)
  // 버튼마다 share되지 않음. createCounterButton이 불려질 때마다
  // count는 새로 생성되기 때문. 그리고 클로져로 이벤트리스너 콜백에서 접근가능
  let count = 0
  btn.addEventListener('click', function () {
    btn.innerText = `Clicked ${++count} times`
  })
}

createCounterButton('btn3')
createCounterButton('btn4')
createCounterButton('btn5')

// Looping
for (var i = 0; i < 5; i++) {
  // var는 function scope고, setTimeout 비동기라서
  // loop가 먼저 다 돌고 i = 5가 된 상태에서
  // setTimeout이 한번에 모두 쏟아져 나오는 상황
  setTimeout(function () {
    console.log(`Times up! ${i}`)
  }, 1000 * i)
}

// var를 쓰였을 때라면 어떻게 closure로 var를 polluting하지 않을 수 있을까?
for (var i = 0; i < 5; i++) {
  // j는 IIFE가 argument i로 받은 겁니다
  // 함수 scope니까, j는 함수 밖으로 나가서 다른 j를 polute하지 못합니다.
  (function (j) {
    setTimeout(function () {
      console.log(`Times up! ${i}`)
    }, 1000 * j)
  })(i)
}

// let은 블록스코프니까 loop로 다른 블록을 넘어가도 이전 let을 polute하지 못한다
for (let k = 0; k < 5; k++) {
  setTimeout(function () {
    console.log(`Times up! ${k}`)
  }, 1000 * k)
}
