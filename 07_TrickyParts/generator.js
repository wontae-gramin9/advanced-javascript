// can pause its execution and resume its execution
// on demand로 value를 call할 수 있음

function* evens(n) {
  while (true) {
    yield n
    n += 2
  }
}
console.log(evens(8)) // 이 자체는 object이다
console.log(evens(8).next()) // { value, done: true || false }

function* myCats() {
  yield "Blue"
  yield "Kityyu"
  yield "Cream"
  yield "Creedence"
}
const catGene = myCats()

console.log(catGene.next())
console.log(catGene.next())
console.log(catGene.next())
console.log(catGene.next())
console.log(catGene.next()) // Exhausted { value: undefined, done: true }

function* fib() {
  let a = 1,
    b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}
const fibGene = fib()
console.log(fibGene.next().value)
console.log(fibGene.next().value)
console.log(fibGene.next().value)
console.log(fibGene.next().value)
console.log(fibGene.next().value)
console.log(fibGene.next().value)
for (let i = 0; i < 20; i++) {
  console.log(fibGene.next().value)
}

// When are generators useful?
// Image lazy loading, infinite scroll, button click(event)...
// that is implemented with some batch size
const allImages = Array.from(
  { length: 1000 },
  (_, i) => `https://placeimg.com/640/480/any?images=${i}`
)

function* getBatchOfImages(allImages, batchSize = 10) {
  let curImgIdx = 0
  while (curImgIdx < allImages.length) {
    yield allImages.slice(curImgIdx, curImgIdx + batchSize)
    curImgIdx += batchSize
  }
}

const imageGen = getBatchOfImages(allImages)
console.log(imageGen.next().value)

function* rangeGenerator(start, end) {
  let i = start
  if (i <= end) {
    while (i <= end) {
      yield i++
    }
  } else {
    while (i >= end) {
      yield i--
    }
  }
}

const rangeGene = rangeGenerator(1, 6)
console.log(rangeGene.next().value)
console.log(rangeGene.next().value)
console.log(rangeGene.next().value)
console.log(rangeGene.next().value)
console.log(rangeGene.next().value)
console.log(rangeGene.next().value)
console.log(rangeGene.next().value)