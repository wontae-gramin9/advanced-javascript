// Adding a pause before executing some codes
function queryApi() {
  console.log("Requesting the api")
}

let debounceTimeout // 맨 처음에만 undefined
const searchInput1 = document.querySelector("#search1")
searchInput1.addEventListener("input", () => {
  clearInterval(debounceTimeout) // 마지막 keydown때까지 이전에 fire된 setInterval을 취소한다
  debounceTimeout = setTimeout(() => {
    queryApi()
  }, 500)
})

// --- ↑ 위처럼 코드를 작성하면, TimeoutId가 global에 들어가기 때문에
// 여러개의 이벤트를 대상으로 할 때 gobal polution이 생기는 등 관리가 어려워진다
const searchInput2 = document.querySelector("#search2")

// Reusable debounce function
function debounce(callback, delay) {
  let timeoutId;
  // arguments는 함수 내부에서 args를 받아야 하는데 못 보내줄 때 쓰는 것이다
  return (...arguments) => {
    if (timeoutId) {
      clearInterval(timeoutId)
    }
    timeoutId = setTimeout(() => {
      callback(...arguments)
    }, delay)
  }
}

// ---- debounce의 arg로 넣어주면 되니까, 함수를 몇개를 만들어도 상관없다.
function queryApi2(searchTerm, color) {
  console.log(`Requesting the api for ${searchTerm}`)
  console.log(`color arguments is  ${color}`)
}
const anothoerDebouncedQueryApi = debounce(queryApi2, 500)
// --------

searchInput2.addEventListener("input", (evt) => {
  anothoerDebouncedQueryApi(evt.target.value, "red")
})