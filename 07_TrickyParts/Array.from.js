// Generate array from sth none array
// 기존의 값을 변형하지 않는다
console.log(Array.from("hello"))
console.log(Array.from([1, 2, 3]))
const nums = new Set([1, 2, 3, 4, 5, 6])
console.log(Array.from(nums))

// List가 아닌데 list처럼 생긴 자료형에 filter, map 같은 메소드를 쓰고 싶을때
// Array.from(domNodes).filter() 로 사용할 수 있다.
console.log(Array.from("abcd"))

// 인수로 mapping function 사용 가능
console.log(Array.from("abcd"), x => x.toUpperCase())
console.log(Array.from(nums, n => n + 1))

console.log(Array.from({ length: 10 }))
console.log(Array.from({ length: 10 }, el => "lol"))
// Generate sequence
console.log(Array.from({ length: 10 }, (el, idx) => idx))


