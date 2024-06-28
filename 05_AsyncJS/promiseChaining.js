const BASE_URL = "https://pokeapi.co/api/v2/pokemon"
const ERROR_URL = "http://nope.nope"

// catch를 하려면 각각의 함수마다 달아줘야 하나?
fetch(`${BASE_URL}/1`)
  .then((res1) => {
    console.log('res1: ', res1);
    return fetch(`${BASE_URL}/2`)
    // then 이후에 또 다른 함수를 실행하고 싶다면
    // 해당 then의 return값에 실행하고 싶은 다른 함수를 넣어준다
  }).then((res2) => {
    console.log('res2: ', res2);
    return fetch(`${BASE_URL}/3`)
  }).then((res3) => {
    console.log('res3: ', res3);
    return fetch(`${ERROR_URL}/4`)
  }).then((res4) => {
    console.log('res4: ', res4);
  })
  // 아니다. 마지막에 catch를 달아주면 어느 Promise의 에러인지 구별해서 알려준다
  // 3번이 에러라면, 1번 2번은 정상적으로 실행하고 3번에서 catch로 돌린다.
  // 4번은 실행되지 않는다.
  .catch((err) => {
    console.log(`In the catch! error: ${err}`)
  }).finally((err) => {
    console.log(`Gets executed anyway`)
  })
