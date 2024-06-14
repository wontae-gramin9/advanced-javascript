// Interface Segratation Principle
// Class should not implement interfaces that it does not use
// → 하나의 큰 interface를 만드는 것보다 작은 interface로 나누게 된다

// js이지만 interface로 생각해라
class Worker {
  work() {
    console.log("working on work!")
  }
  eat() {
    console.log("eating some food!")
  }
  sleep() {
    console.log("taking a nap!")
  }
}

function manageWork(worker) {
  // 여기에서 work는 work()메소드만 사용하고 다른 메소드는 사용하지 않는다.
  worker.work()
}

// ↓
// interface를 나누어서 ISP를 적용했을 때
class Workable {
  work() {
    console.log("working on work!");
  }
}

class Eatable {
  eat() {
    console.log("eating a snack");
  }
}

class Sleepable {
  sleep() {
    console.log("taking a nap");
  }
}

function manageWorkISP(workable) {
  workable.work();
}
