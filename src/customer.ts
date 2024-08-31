export class Customer {
  name: string;
  private balance: number;

  /**
   * Initializes a new instance of a Customer with the given name and initial deposit.
   * @param name - The name of the customer.
   * @param initialDeposit - The initial amount of money deposited into their account.
   */
  constructor(name: string, initialDeposit: number) {
    this.name = name;
    this.balance = initialDeposit;
  }

  /**
   * Deposits the given amount into the customer's account.
   * @param amount - The amount to deposit. Must be a positive number.
   * If the amount is not positive, a warning is logged and the method does nothing.
   */
  deposit(amount: number): void {
    if (amount <= 0) {
      console.warn("Cannot deposit amount");
      return;
    }
    this.balance += amount;
    console.info(`${amount} deposited to ${this.name}'s account.`);
  }

  /**
   * Withdraws the given amount from the customer's account.
   * @param amount - The amount to withdraw. Must be a positive number less than or equal to the current balance.
   * If the amount is not positive or exceeds the current balance, a warning is logged and the method does nothing.
   */
  withdraw(amount: number): void {
    if (amount <= 0 || amount > this.balance) {
      console.warn("Withdrawal amount exceeds the available balance");
      return;
    }
    this.balance -= amount;
    console.info(`${amount} withdrawn from ${this.name}'s account.`);
  }

  /**
   * Returns the current balance of the customer.
   * @returns The current balance of the customer.
   */
  getBalance(): number {
    console.info(`Current balance for ${this.name} is ${this.balance}`);
    return this.balance;
  }

  /**
   * Transfers the given amount from the customer's account to the beneficiary's account.
   * @param amount - The amount to transfer. Must be a positive number less than or equal to the current balance.
   * If the amount is not positive or exceeds the current balance, a warning is logged and the method does nothing.
   * @param beneficiary - The customer to receive the transfer.
   */
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
