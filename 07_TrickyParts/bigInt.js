console.log(Number.MAX_SAFE_INTEGER)

// 소수점이 나오는 연산은 불가
let big = BigInt("123432563241645263456453747")
let boy = 12342351243654364565436534123213123n
console.log(typeof boy)

// bigInt끼리 연산은 가능, number와 섞어서 연산 불가
console.log(big + boy)
console.log(big / boy)
console.log(big * boy)
console.log(big - boy)