// Module pattern
// Instant method invokation
// How it used to ensure private and public encapsulation protecting the glabal namespace
// Jquery, RequireJs
const ChickenModule = (() => {
  const eggColor = "white" // private variable
  const cluck = () => console.log("Cluck! Cluck!")
  return {
    layEgg: () => {
      console.log("Laid a", eggColor, "egg.")
      cluck()
    }
  }
})()

ChickenModule.layEgg()

const myModule = (() => {
  const privateVar = "I AM PRIVATE!!!";
  const privateMethod = () => `${privateVar} METHOD`;
  return {
    publicVar: "I AM PUBLIC!!!",
    publicMethod: () => {
      console.log("calling private method: ", privateMethod());
    },
  };
})();

const counter = (() => {
  let count = 1;
  return {
    getCount: () => count,
    increment: () => count++,
  };
})();

console.log(myModule)