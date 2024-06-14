// Law of demeter
// Class should not reveal too much about their structure
// or their collaborator's
// → when accessing prop/method, use only 1 dot

// obk.getToy().color 피해라
class Wallet {
  constructor(money) {
    this.money = money
  }

  getMoney() {
    return this.money
  }
}

class Person {
  constructor(wallet) {
    this.wallet = wallet
  }

  getWallet() {
    return this.wallet
  }
}

class WalletLD {
  constructor(money) {
    this.money = money
  }

  debit(amount) {
    this.money -= amount
  }

  getMoney() {
    return this.money
  }
}

class PersonLD {
  constructor(wallet) {
    this.wallet = wallet
  }

  getWallet() {
    return this.wallet
  }

  payAmount(amount) {
    return this.wallet.debit(amount)
  }
}


class ShoppingMall {
  chargeCustomer(person, amount) {
    // let wallet = person.getWallet()
    // let money = wallet.getMoney()
    // wallet.money = money - amount
    // ↑ person.getWallet().getMoney()로 2 dots
    person.payAmount(amount)
  }
}

let wallet = new WalletLD(100);
let person = new PersonLD(wallet);
let mall = new ShoppingMall();

mall.chargeCustomer(person, 50)

