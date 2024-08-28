const POKE_URL = "https://pokeapi.co/api/v2/pokemon";

// fetch는 response.body의 readableStream객체를 리턴한다
// 내부 데이터를 parse해서 읽으려면 따로 메소드를 호출해야하는데
// readableStream도 promise를 리턴한다
// → await response.json()/text()/blob()...

fetch(POKE_URL)
  .then((res) => res.json()) // promiseChaning에서도 리턴값에 promise가 들어옴
  .then((data) => console.log(data));

async function getPokemon() {
  const response = await fetch(POKE_URL);
  const data = await response.json();
  console.log(data);
}

// Error handling
// fetch는 인터넷이 끊겨있거나, cors일때만 error가 나오고
// status가 400대, 500대 나올때는 에러가 나지 않는다.
// response.ok = false가 될 뿐 값은 받아온다는 것
// 따라서 값을 받았는지 안 받았는지 확인하려면 response.ok를 비교한다
async function getPokemon() {
  try {
    const response = await fetch(POKE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log("SOMETHING WENT WRONG WITH THE FETCH CALL!");
    console.log(e);
  }
}

// fetch(POKE_URL)
//   .then((res) => {
//     console.log("THE FETCH WORKED!!!!");
//     console.log(res);
//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => console.log("JSON DATA", data))
//   .catch((e) => {
//     console.log("SOMETHING WENT WRONG WITH THE FETCH CALL!");
//     console.log(e);
//   });
