// PARTIAL APPLICATION
// argument로 새로운 function을 만드는 것
// factory function으로 쓸 수 있다

// 1. WITH BIND
function greet(greeting, name) {
  console.log(`${greeting}, ${name}`)
}

const aussieGreet = greet.bind(null, "Gday") // this를 생각할 필요 없다
console.log('aussieGreet: ', aussieGreet('Wontae'));

// 단점:
// 1. 새로운 변수를 생성해서 넣어줘야 한다
// 2. 첫번째 argument만 고정할 수 있다.

// 2. partial함수 만들기
function multiply(a, b) {
  return a * b
}

function partial(func, ...fixedArgs) { // fixedArgs: 여러 arg를 가진 array도 가능
  return function (...remainingArgs) {
    return func(...fixedArgs, ...remainingArgs)
  }
}

const double = partial(multiply, 2)
const triple = partial(multiply, 3)
console.log('double: ', double(5));
console.log('triple: ', triple(2));

const fetchData = (url, apiKey, params) => {
  const queryString = new URLSearchParams(params).toString()
  const fullUrl = `${url}?${queryString}`
  console.log(`Sending request to ${fullUrl}`);
  console.log(`With API key of ${apiKey}`);

}
const myApiKey = "my-secret-api-key";
const myApiUrl = "https://api.mywebsite.com/data";

const googleApiKey = "google-secret-api-key";
const googleApiUrl = "https://api.google.com/data";

const fetchMyAPI = partial(fetchData, myApiUrl, myApiKey);
const fetchGoogle = partial(fetchData, googleApiUrl, googleApiKey);

console.log(fetchMyAPI({ id: 1, sort: "desc" }))
console.log(fetchGoogle({ search: "chicken" }))

