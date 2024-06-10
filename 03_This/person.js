const person = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    return `${this.name} sings LaLaLa`
  }
}

// this: 부르는 객체

console.log(person.sing())
// 1. 객체에서 불렸을 때는 해당 객체가 된다
const pSing = person.sing
// 2. 함수 표현식으로 변수에 함수를 넣는다면 
// 브라우저에서는 window, node에서는 glabal
// 해당 함수를 부르는 객체가 global이므로 global객체가 된다.
// 모든 함수는 어떤 object의 method라고 생각하면
// global.pSing()과 같다
console.log('pSing: ', pSing());

class Cat {
  constructor(firstName) {
    this.firstName = firstName
  }

  dance(style = "tango") {
    return `${this.firstName} dances ${style}`
  }
}

const fluffy = new Cat("fluffy")
const blue = new Cat("blue")
console.log(fluffy.dance())
console.log(fluffy.dance("salsa"))
const fDance = fluffy.dance
// gloabl의 firstName은 없을텐데, 왜 instance의 메소드일때는 
// undefined가 아닌 error를 뱉을까?
// console.log('fDance: ', fDance());
// 클래스의 method를 global에서 부르면 this는 window/global이 아니라 undefined이다

// call
fDance.call(fluffy)
console.log('fDance.call(fluffy): ', fDance.call(fluffy, "salsa"));
fDance.call(blue)
console.log('fDance.call(blue): ', fDance.call(blue, "argument"));

const lisa = {
  name: "Lisa",
  city: "Los Angeles"
}

// lisa는 sing메소드가 없지만, person.sing에 call로 this를 lisa로 바꿔주면
// this.name은 접근 가능하다
person.sing.call(lisa)
console.log('person.sing.call(lisa): ', person.sing.call(lisa));
