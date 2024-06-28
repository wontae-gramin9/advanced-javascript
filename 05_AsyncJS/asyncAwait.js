// async가 붙으면, 항상 return값은 promise가 된다
// 설사 return값을 1이라 명시해도, 실제 리턴값은 Promise<number>입니다.
// await를 붙이면 sync처럼 보이지만, async로 동작하고 js를 블록하지 않는다.
// await를 기다리는 동안 싱글스레드는 알아서 다른 일을 하고 있다는 것
// Non-blocking async

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"
const ERROR_URL = "http://nope.nope"

async function getFirstPokemon() {
  const result = await fetch(`${BASE_URL}/1`)
  // await를 쓰지 않는다면 resolve된 data를 받는게 아닌
  // promise객체를 받는다 
  // (pending, fulfilled, rejected / undefined, value, error)의 상태가 있지만
  // 기다리지 않으므로 100% {state: "pending", value: undefined}를 받는다.
  console.log(result)
}
console.log('getFirstPokemon: ', getFirstPokemon());

async function getFourPokemon() {
  // 순서대로  call 된다.
  try {
    const res1 = await fetch(`${BASE_URL}/1`)
    console.log('res1: ', res1);
    const res2 = await fetch(`${BASE_URL}/2`)
    console.log('res2: ', res2);
    const res3 = await fetch(`${ERROR_URL}`)
    console.log('res3: ', res3);
    const res4 = await fetch(`${BASE_URL}/4`)
    console.log('res4: ', res4);
  } catch (e) {
    // err를 낼 수 있는 내부 await을 모두 감싸면 전체를 대응할 수 있다.
    // 3번이 에러라면, 1번 2번은 정상적으로 실행하고 3번에서 catch로 돌린다.
    // 4번은 실행되지 않는다.
    console.log(e)
  }
}
console.log('getFirstPokemon: ', getFourPokemon());

