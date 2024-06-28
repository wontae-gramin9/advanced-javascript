// comparing .then/.catch vs async/await

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"
const ERROR_URL = "http://nope.nope"

// 1. call이 연속적일 필요 없을 때(순서 상관없음)
let result = []
fetch(`${BASE_URL}/1`).then(res => result.push(res))
fetch(`${BASE_URL}/2`).then(res => result.push(res))
fetch(`${BASE_URL}/3`).then(res => result.push(res))
console.log("Wating for the requests to complete")
// 같은 작용을 async-await로
result = []
async function getPokemon1() {
  const res = await fetch(`${BASE_URL}/1`)
  result.push(res)
}
async function getPokemon2() {
  const res = await fetch(`${BASE_URL}/2`)
  result.push(res)
}
async function getPokemon3() {
  const res = await fetch(`${BASE_URL}/3`)
  result.push(res)
}
console.log("Wating for the requests to complete")
getPokemon1()
getPokemon2()
getPokemon3()

// 2. call이 연속적이어야 할 때(순서 상관있음)
result = []
fetch(`${BASE_URL}/1`).then(res => {
  result.push(res)
  return fetch(`${BASE_URL}/2`)
}).then(res2 => {
  result.push(res2)
  return fetch(`${BASE_URL}/3`)
}).then(res3 => {
  result.push(res3)
})
// 같은 작용을 async-await로
result = []
async function getPokemon3() {
  const res1 = await fetch(`${BASE_URL}/1`)
  result.push(res1)
  const res2 = await fetch(`${BASE_URL}/2`)
  result.push(res2)
  const res3 = await fetch(`${BASE_URL}/3`)
  result.push(res3)
}

// 3. Promise.all
// accepts an array of promises and returns a new promise
// 모든 promise가 resolve되어야만 resolve되고, 하나라도 reject뜨면 전체 reject
let lotsOfFetchCalls = [
  fetch(`${BASE_URL}/1`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${ERROR_URL}`),
]
Promise.all(lotsOfFetchCalls) // a new single promise\
  .then((res) => {
    console.log("All promise are done and resolved")
    console.log(res)
  }).catch((e) => {
    console.log("One of them was rejected")
    console.log(e)
  })
// 같은 작용을 async-await로
async function getLotsOfPokemon() {
  try {
    const result = await Promise.all(lotsOfFetchCalls)
    console.log("All promise are done and resolved")
    console.log(result)
  } catch (e) {
    console.log("One of them was rejected")
    console.log(e)
  }
}

// 3. Promise.allSettled()
// accepts an array of promises and returns a new promise
// resolve와 reject 상관없이 일단 모든 promise를 실행하고, 결과값(value, error)을
// 하나의 object에 모두 넣어 반환해서 개발자가 자유롭게 object를 만질 수 있다.
async function allSettledDemo() {
  const GITHUB_BASE_URL = "https://api.github.com";

  let elieP = fetch(`${GITHUB_BASE_URL}/users/elie`);
  let joelP = fetch(`${GITHUB_BASE_URL}/users/joelburton`);
  let badUrl = fetch(ERROR_URL);
  let coltP = fetch(`${GITHUB_BASE_URL}/users/colt`);
  let anotherbadUrl = fetch(ERROR_URL);

  let results = await Promise.allSettled([
    elieP,
    joelP,
    badUrl,
    coltP,
    anotherbadUrl,
  ]);

  console.log(results);
  const fulfilled = results.filter((r) => r.status === "fulfilled");
  const rejected = results.filter((r) => r.status === "rejected");
  console.log("fulfilled:", fulfilled);
  console.log("rejected:", rejected);
}

allSettledDemo()

// 4. Promise.race
// 가장 빨리 resolve되거나 reject되는 promise만 신경쓴다.
Promise.race(lotsOfFetchCalls)
  .then(winner =>
    console.log('Promise race winner: ', winner))
  .catch(err => console.log("Promise race winner, but it's an err: ", err))

// 5. promise.any
// promise array중에 가장 빨리 resolve되는 promise를 리턴
// reject가 나오려면 array의 모든 promise가 reject되어야 한다
Promise.any(lotsOfFetchCalls)
  .then(firstToResolve =>
    console.log('First resolved promise: ', firstToResolve))
  .catch(err => console.log('Oh no, this means all promises were rejected: ', err))
