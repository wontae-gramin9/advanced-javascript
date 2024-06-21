// immediately invoked니까 namesless function
(function () {
  console.log("Hello from IIFE")
})()

  // 1. privacy (Module pattern)
  // → glabal varibal polution을 막을 수 있다
  (() => {
    var soremo = "function scope"
    let secret = 10
    console.log("arrow function will do to")
    // 한번만 실행되고, 함수는 call stack에서 제거되니때문에 다시는 접근할 수 없다
    console.log('secret: ', secret);
  })()