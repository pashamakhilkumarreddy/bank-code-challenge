export class Customer {
  name: string;
  private balance: number;

  constructor(name: string, initialDeposit: number) {
    this.name = name;
    this.balance = initialDeposit;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.warn("Cannot deposit amount");
      return;
    }
    this.balance += amount;
    console.info(`${amount} deposited to ${this.name}'s account.`);
  }

  withdraw(amount: number): void {
    if (amount <= 0 || amount > this.balance) {
      console.warn("Withdrawal amount exceeds the available balance");
      return;
    }
    this.balance -= amount;
    console.info(`${amount} withdrawn from ${this.name}'s account.`);
  }

  getBalance(): number {
    console.info(`Current balance for ${this.name} is ${this.balance}`);
    return this.balance;
  }

  transfer(amount: number, beneficiary: Customer) {
    if (amount <= 0 || amount > this.balance) {
      console.warn("Insufficient funds for transfer");
      return;
    }
    this.balance -= amount;
    beneficiary.balance += amount;
    console.info(
      `${amount} transferred from ${this.name} to ${beneficiary.name}`
    );
  }
}
