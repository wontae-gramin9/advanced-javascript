// Liskov Substitution Principle
// A subclass should be able to stand in for its parent class
// without crashing

// class Bird {
//   fly() {
//     console.log("This bird can fly!");
//   }
// }

// class Duck extends Bird {
//   fly() {
//     console.log("Duck flying!");
//   }
// }

// class Eagle extends Bird {
//   fly() {
//     console.log("Eagle flying!");
//   }
// }

// class Penguin extends Bird {
//   fly() {
//     throw new Error("penguins cannot fly!");
//   }
// }

// function makeBirdFly(bird) {
//   bird.fly();
// }

// const duck = new Duck();
// const eagle = new Eagle();
// const penguin = new Penguin();

// makeBirdFly(duck); // Works fine
// makeBirdFly(eagle);
// makeBirdFly(penguin);

// Penguin이 bird(부모클래스)로 들어가 실행되었을때
// 에러를 발생시키므로 LSP을 위배한다

// ↓

// 한 부모클래스가 모든 자식을 포용하지 못하면 부모클래스를 나눠 만들자
class Bird { }
class FlyingBird extends Bird {
  fly() {
    console.log('bird is flying')
  }
}

class Duck extends FlyingBird {
  fly() {
    console.log("Duck flying!");
  }
}

class Eagle extends FlyingBird {
  fly() {
    console.log("Eagle flying!");
  }
}

class Penguin extends Bird {
}

function makeBirdFly(bird) {
  // 여기서도 나눈 클래스로 분기를 타주면 좋다
  if (bird instanceof FlyingBird) {
    bird.fly()
  } else {
    console.log('This bird cannot fly')
  }
}

const duck = new Duck();
const eagle = new Eagle();
const penguin = new Penguin();

makeBirdFly(duck); // Works fine
makeBirdFly(eagle);
makeBirdFly(penguin);