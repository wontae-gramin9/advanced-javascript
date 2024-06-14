// Dependency Inversion Principle
// High-level modules(main app logic) should not depend directly on
// low-level modules(libraries, 여기서는 auth logic)
// Both should be implemented with abstractions

// 1. Auth application
// 처음에는 username & password만, 그러나 이후에는 email, phone, oauth2도 추가하고싶음

// 현재상태

class UsernmaePasswordAuth {
  authenticate(username, pathword) {

  }
}

class User {
  login(username, password) {
    const auth = new UsernmaePasswordAuth()
    // auth logic을 하나의 메소드에 결합해버리면, 새로운 auth방법이 추가될때마다
    // 그 메소드를 다시 써야 한다
    // 새 auth로직이 추가되면 authenticate메소드가 달라지겠지
    return auth.authenticate(username, password)
  }
}

// ↓

// Abstract auth method 인터페이스 만들고 implement해서 상황을 나누고
// 메인로직은 그 인터페이스를 받게 하라
class AbstractAuthMethod {
  authenticate(credentials) {
    throw new Error("This method should be overridden.")
  }
}

class UsernmaePasswordAuthDIP extends AbstractAuthMethod {
  authenticate(username, pathword) {
    // logic to auth with username & password
  }
}

class EmailAuthAuthDIP extends AbstractAuthMethod {
  authenticate(username, pathword) {
    // logic to auth with email
  }
}

class UserDIP {
  constructor(authMethod) {
    if (!(authMethod instanceof AbstractAuthMethod)) {
      throw new Error("Invaild auth method")
    }
    this.authMethod = authMethod
  }

  login(credentials) {
    return this.authMethod.authenticate(credentials)
  }
}

// 새로운게 추가된다고해도 User는 변하지 않고
// 다만 AbstractAuthMethod를 구현하는 새 클래스만 작성하면 된다.
// 이러면 high level은 더이상 low level에 신경쓰지 않고 interface만 신경쓰면 되고,
// low level만 interface를 신경써서 interface에 맞춰서 코드를 작성하면 된다
