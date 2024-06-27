// high precision timing data
// how long pageloads take
// how long resources takes to load
// how long functions takes to run

const largeArray = Array.from({ length: 10000 }, () => (
  Math.floor(Math.random() * 10)
))

// swap check(already nearly sorted)
function bubbleSort(arr) {
  let swap;
  for (let i = arr.length; i > 0; i--) {
    swap = false
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swap = true
      }
    }
    // swap이 되어서 true가 된 loop이후에
    // 어느 한 루프에서 false로 한번도 바뀌지 않았다? → 모든 원소가 정렬되었다는 것
    // 그러면 바로 다음 루프에서 정말로 false로 바뀌지 않는지 확인하고
    // 바뀌지 않았다면 그 루프에서 반복문을 끝낸다.
    if (!swap) break
  }
  return arr
}

const arrayForBubbleSort = [...largeArray]
const arrayForNativeSort = [...largeArray]

performance.mark("nativeSortStart")
arrayForNativeSort.sort((a, b) => a - b)
performance.mark("nativeSortEnd")
performance.measure("Native sort time", "nativeSortStart", "nativeSortEnd")

performance.mark("bubbleSortStart")
bubbleSort(arrayForBubbleSort)
performance.mark("bubbleSortEnd")
performance.measure("Bubble sort time", "bubbleSortStart", "bubbleSortEnd")

const nativeDuration = performance.getEntriesByName("Native sort time")
console.log('nativeDuration: ', nativeDuration[0].duration);
const bubbleDuration = performance.getEntriesByName("Bubble sort time")
console.log('nativeDuration: ', bubbleDuration[0].duration);
