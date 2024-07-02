console.log(0 / 0)
console.log(1 / "a")

// 모든 NaN은 unique하다. 다른 NaN과 같지 않다
console.log(NaN === NaN)
console.log(0 / 0 === 0 / 0)
console.log(NaN == NaN)
console.log(0 / 0 == 0 / 0)
console.log(Number(false)) // 0, falsy
console.log(Number([])) // 0, falsy

// isNaN은 먼저 input을 숫자로 바꾸려고 한다.
// 바꾼 결과가 NaN이면 true, 아니면 false
// NaN이거나 숫자로 바꿀 수 없는 건 true가 나온다

console.log(isNaN([])) // [] → "" → 0 → false
console.log(isNaN("fdsd")) // true. 숫자로 변환될 수 없으면 NaN이고 따라서 isNaN은 true

// 대신 Number.isNan()은 NaN을 넣었을 때만 true가 나오고
// 나머지는 전부 false가 나온다
console.log(Number.isNaN(0 / 0))
console.log(Number.isNaN("nope")) // false

