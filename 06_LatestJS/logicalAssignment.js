// Logical Or Assignment

const todo = { priority: "", task: "Finish Editing Course" };

// Is priority falsy?  If so, set it to  "MEDIUM"
// todo.priority ||= "MEDIUM";

// Logically equivalent to:
// todo.priority || (todo.priority = "MEDIUM");

// 함수 실행/할당도 가능하다
// console.log(todo.priority ||= console.log("Function is also assignable"))
console.log(todo.priority ||= () => console.log("Function is also assignable"))

// Logical And Assignment
// 좌측이 truthy일때만 우측의 값이 대입된다

let loggedInUser = { name: "Tom" }
// if (loggedInUser) {
//   loggedInUser = { ...loggedInUser, colorPreference: "purple" }
// }
loggedInUser &&= { ...loggedInUser, colorPreference: "purple" }
console.log(loggedInUser)

// Logical Coalescing Assignment
function doSomeSetup(options = {}) {
  options.timeout ??= 3000; // default timeout of 3 seconds
  options.retries ??= 5; // default of 5 retries
  console.log(options);
}
