// Properties
// 	- balance defaults to 0
// 	- accountHolder
//  - accountNumber

// Methods
// 	- deposit(amt)
// 	- withdraw(amt)

class BankAccount {
	constructor(accountNumber, accountHolder, balance = 0) {
		this.accountNumber = accountNumber
		this.accountHolder = accountHolder
		this.balance = balance
	}

	deposit(amt) {
		if (amt <= 0)
			throw new Error('어떤에러')
		this.balance += amt
		return this.balance
	}

	withdraw(amt) {
		if (this.balance - amt < 0)
			throw new Error('어떤에러')
		if (this.balance - amt < 0)
			throw new Error('0보다 작음')
		this.balance -= amt
		return this.balance
	}
}

const bankAccount = new BankAccount("123aaa", "Wontae")
console.log(bankAccount.deposit(200))