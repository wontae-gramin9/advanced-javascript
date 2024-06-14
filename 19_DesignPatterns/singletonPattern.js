// Singleton pattern
const ChickenFarm = (() => {
  let instance
  const createInstance = () => ({ totalChickens: 100 })
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
})()

const inst1 = ChickenFarm.getInstance()
console.log('inst1: ', inst1);

// 1. Eager Initialization
class DatabaseConnection {
  constructor() {
    if (!DatabaseConnection.instance) {
      // static prop에 최초생성된 instance를 넣는다
      // constructor()에서 instance도 static prop을 사용할 수 있다
      this.connection = this.createConnection() // assume createConnection establishes a database connection
      DatabaseConnection.instance = this
    }
    return DatabaseConnection.instance
  }

  createConnection() {
    console.log("CREATING CONNECTION TO DATABASE!!!!");
    return { connection: "I am the database connection object" };
  }

  // Other database-related methods...
}
const db = new DatabaseConnection().createConnection()
console.log('db: ', db.connection);

// 2. Static Initialization Block
class SIBDBConnection {
  static instance
  static {
    // SIB의 this는 instance가 아닌 class이다
    this.instance = new SIBDBConnection()
  }

  constructor() {
    if (!SIBDBConnection.instance) {
      this.connection = this.createConnection()
      SIBDBConnection.instance = this
    }
  }

  createConnection() {
    console.log("CREATING CONNECTION TO DATABASE!!!!");
    return { connection: "I am the database connection object" };
  }
}

const db2 = SIBDBConnection.instance
console.log('db2: ', db2);

// 3. Lazy Initialization
class LazyDB {
  static instance
  constructor() {
    if (!LazyDB.instance) {
      this.connection = null
      LazyDB.instance = this
    }
  }

  getConnection() {
    if (!this.connection) {
      this.connection = this.createConnection()
    }
    return this.connection
  }

  createConnection() {
    console.log("CREATING CONNECTION TO DATABASE!!!!");
    return { connection: "I am the database connection object" };
  }
}

const db3 = new LazyDB()
const connection = LazyDB.getConnection()

