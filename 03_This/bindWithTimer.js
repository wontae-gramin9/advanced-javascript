class Counter {
  constructor(count = 0, incrementAmt = 1) {
    this.count = count
    this.incrementAmt = incrementAmt
  }

  start() {
    // bind를 하지 않으면 setInterval의 콜백을 실행하는건 Js이다
    // (싱글스레드의 비동기메소드 Queue)
    // 따라서 this는 window/global이 된다
    setInterval(function () {
      this.incrementAmt.bind(this)
      // this.count += this.incrementAmt
    }, 1000)
  }

  incrementAndPrint() {
    console.log(this.count)
    this.count += this.incrementAmt
  }
}

const counter = new Counter()
console.log('counter: ', counter.start());

