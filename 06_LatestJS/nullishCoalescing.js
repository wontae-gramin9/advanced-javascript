// Function that generates a random user
function getUser() {
  // Helper function to generate a random number
  const getRandomNumber = (max) => Math.floor(Math.random() * max);

  // Possible user data
  const firstNames = ["John", "Raj", "Dave", "Sarah", "Rosa", "Esteban"];
  const lastNames = ["Hamilton", "Norris", "Bottas", "Tsunoda", "Sainz"];
  const emails = ["example.com", null, "sample.com", undefined, "demo.com"];
  const includeAddress = [true, false]; // Array to determine if address should be included

  const includeMethod = [true, false]; // Array to determine if method should be included

  // Randomly pick data or leave it undefined
  const firstName = firstNames[getRandomNumber(firstNames.length)];
  const lastName = lastNames[getRandomNumber(lastNames.length)];
  const emailDomain = emails[getRandomNumber(emails.length)];
  const age = getRandomNumber(4);
  const shouldIncludeMethod =
    includeMethod[getRandomNumber(includeMethod.length)];
  const shouldIncludeAddress =
    includeAddress[getRandomNumber(includeAddress.length)];

  // Construct a user object, email might be non-existent due to undefined emailDomain
  const user = {
    email: emailDomain
      ? `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomain}`
      : undefined,
    age: Math.random() > 0.5 ? age : null, // age will always exist, just for the sake of structure
  };
  if (Math.random() > 0.5) {
    user.name = {
      first: firstName,
      last: lastName,
    };
  }

  if (shouldIncludeAddress) {
    user.address = {
      street: "1234 Elm St",
      city: "Anytown",
      state: "CA",
      country: "USA",
      postalCode: "12345",
      coordinates: {
        lat: null, // let's assume the latitude is not available
        long: 35.12345, // longitude is available
      },
    };
  }

  // Sometimes include a method
  if (shouldIncludeMethod) {
    user.greet = function () {
      console.log(`HELLO THERE! I AM A USER!!!`);
    };
  }

  return user;
}

const user = getUser();
console.log(user);

const firstName = user?.name?.fisrt || "anonymous"
// ||
// 이 코드의 문제점은, 왼쪽이 falsy value이기만 하면 오른쪽의 값이 나온다는 것
// null, undefined, false, Nan, 0, -0, 0n(BigINt), ""면 오른쪽 값이 나온다
// 그런데 실제 값이 false여도 ||를 쓰면 오른쪽 값이 나와버림

// 다시 말하면, 왼쪽의 값이 truthy면 다 제값이 나온다. 1, 2, "a"...

// ??
// 좌측이 undefined 아니면 null일때만 우측값이 나온다
// 왼쪽의 값이 falsy인데 "", 0, -0, false, 0n일 때는 그걸 출력해야할 때는
// ??를 써야 한다

const age = user?.age ?? "IDK THE AGE";
console.log("AGE IS ", age);
