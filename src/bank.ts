import { Customer } from './customer';

export class Bank {
  customers: Customer[];

  /**
   * Initializes a new instance of a Bank with an empty list of customers.
   */
  constructor() {
    this.customers = [];
  }

  /**
   * Adds a new customer to the bank's records, with the given initial deposit.
   * @param name - The name of the customer.
   * @param initialDeposit - The initial amount of money deposited into their account.
   */
  addCustomer(name: string, initialDeposit: number): void {
    const customer = new Customer(name, initialDeposit);
    this.customers.push(customer);
  }

  /**
   * Calculates the total balance of all customers in the bank.
   * @returns The total balance of all customers.
   */
  getTotalBalance(): number {
    if (!this.customers.length) return 0;
    return this.customers.reduce(
      (acc: number, curr: Customer) => acc + curr.getBalance(),
      0
    );
  }
}
