const input = document.querySelector("#usernameInput")
const h1 = document.querySelector("#usernameDisplay")

// state
const userInfo = {
  username: "",
  // email, state, age.. 가 있을 때 Validation
}

const handler = {
  set: function (obj, property, newValue) {
    obj[property] = newValue
    // update뿐만 아니라 side effect도 줄 수 있다.
    h1.textContent = `Hello there, ${newValue}`
  }
}

const userProxy = new Proxy(userInfo, handler)

input.addEventListener("keyup", (evt) => {
  // userInfo를 directly하게 접근하지 않고 proxy를 통해 접근
  userProxy.username = evt.target.value
})