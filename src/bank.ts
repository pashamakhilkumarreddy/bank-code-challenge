import { Customer } from "./customer";

export class Bank {
  customers: Customer[];

  constructor() {
    this.customers = [];
  }

  addCustomer(name: string, initialDeposit: number): void {
    const customer = new Customer(name, initialDeposit);
    this.customers.push(customer);
  }

  getTotalBalance(): number {
    if (!this.customers.length) return 0;
    return this.customers.reduce(
      (acc: number, curr: Customer) => acc + curr.getBalance(),
      0
    );
  }
}
