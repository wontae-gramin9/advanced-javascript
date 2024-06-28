// new키워드로 Promise만들기
// return new Promise((res, reg) => {})

function wait(succeed) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (succeed) res(true)
      else rej(false)
    }, 1000)
  })
}

wait(true)
  .then(res => {
    console.log("1", res)
    return wait(res)
  })
  .then(res => {
    console.log("2", res)
    return wait(res)
  })
  .then(res => {
    console.log("3", res)
  })
  .catch(e => console.log(e))

const fs = require("fs")

function asyncReadFile(fileName) {
  return new Promise((res, rej) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) rej(err)
      else res(data)
      // Promise를 사용하지 않고, 연속적으로 파일을 읽으려면 
      // 여기서 다시 fs.readFile(다음파일)을 쓰는 콜백헬이 나타난다.
      // 따라서 Promise를 리턴하는 함수를 만들어서 쓰면 코드가 깔끔하다
    })
  })
}

asyncReadFile("./file/haiku1.txt")
  .then(data => {
    console.log("HAIKU 1")
    console.log(data)
    return asyncReadFile("./file/haiku2.txt")
  }).then(data => {
    console.log("HAIKU 2")
    console.log(data)
    return asyncReadFile("./file/haiku3.txt")
  }).then(data => {
    console.log("HAIKU 3")
    console.log(data)
  })

async function getHaikus() {
  try {
    const haiku1 = await asyncReadFile("./file/haiku1.txt")
    console.log("HAIKU 1")
    console.log(haiku1)
    const haiku2 = await asyncReadFile("./file/haiku2.txt")
    console.log("HAIKU 2")
    console.log(haiku2)
    const haiku3 = await asyncReadFile("./file/haiku3.txt")
    console.log("HAIKU 3")
    console.log(haiku3)
  } catch (e) {
    console.log(e)
  }
}
getHaikus()