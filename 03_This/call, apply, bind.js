function maximum() {
  console.log(arguments)
  return Math.max.apply(null, arguments)
}

// bind는 새로운 함수를 만듭니다.
// binding a function to a particular context
const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log('this: ', this);
    console.log(`${this.name} sings LaLaLa`)
  }
}

const lisa = {
  name: "Lisa",
  city: "Los Angeles"
}

conan.sing.call(lisa)
const lisaSings = conan.sing.bind(lisa)
console.log('lisaSings: ', lisaSings());

// binding arguments
function applySalesTax(taxRate, price) {
  return price + price * taxRate
}
console.log('applySalesTax: ', applySalesTax(0.005, 10000));
// null here means it doesn't matter what "this" is
const applyKoreaSalesTax = applySalesTax.bind(null, 0.0725)
const applyMontanaSalesTax = applySalesTax.bind(null, 0.0450)
console.log('applyKoreaSalesTax: ', applyKoreaSalesTax(10000));
console.log('applyMontanaSalesTax: ', applyMontanaSalesTax(10000));

function multiply(a, b) {
  return a * b
}

const double = multiply.bind(null, 2)
const tripple = multiply.bind(null, 3)
console.log('double: ', double(4));
console.log('tripple: ', tripple(12));

// not directly call the function but having Js call them
// Event listeners, Timers, 1st-class functions(map, filter)
// 예를 들어, 이벤트 리스너는 메소드는 내가 코딩하지만
// 버튼이 눌렸을 때 JS가 실행한다

const btn = document.querySelector("#clickMe")
btn.addEventListener("click", conan.sing.bind(conan))
// 콜백을 부르는 객체는 눌려진 버튼이다. 즉 this는 버튼이 된다

// 여기에 call이나 apply를 쓰면 바로 메소드가 불려진다.
// callback 과 callback()의 차이


