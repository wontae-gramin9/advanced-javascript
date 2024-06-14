// Open/Closed Priciple
// Class entity should be open for extension without modifying its source code
class AreaCalculator {
  static calculate(shape) {
    if (shape.type === "circle") {
      return Math.PI * shape.radius ** 2
    } else if (shape.type === "sqaure") {
      return shape.side ** 2
    } else if (shape.type === "sqaure") {
      return shape.side ** 2
      // 다른 shape의 기능을 추가하는 extension을 위해서는
      // calcutate()의 코드를 변경해야 한다(조건문 추가)
    } else {
      return "Unknown"
    }
  }

  static calculateAreas(shapes) {
    return shapes.reduce(
      (acc, shape) => acc + AreaCalculator.calculate(shape),
      0
    )
  }
}

const circle = { type: "circle", radius: 5 }
const square = { type: "square", side: 4 }

// ↓

// 하나의 class의 logic을 extension하지 않고
// 같은 family의 새로운 클래스를 만드는 방법

// js에서는 interface나 추상클래스가 없다. ts에 있음
// polymorphism: multiple classes implement same methods
class Shape {
  // error로 interface를 대신 구현하는 것
  area() {
    throw new Error('abstract method should be overriden.')
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  area() {
    return Math.PI * shape.radius ** 2
  }
}

class Square extends Shape {
  constructor(side) {
    super()
    this.side = side
  }

  area() {
    return shape.side ** 2
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super()
    this.length = length
    this.width = width
  }

  area() {
    return this.length * this.width
  }
}

// AreaCalculator의 calculate()를 수정할 필요 없다
class OCPAreaCalculator {
  static calculate(shape) {
    return shape.area()
  }
  static calculateAll(shapes) {
    return shapes.reduce(
      (acc, shape) => acc + AreaCalculator.calculate(shape),
      0
    )
  }
}

const c = new Circle(5)
const s = new Square(5)
const r = new Rectangle(5, 4)
