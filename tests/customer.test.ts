import { Customer } from "../src/customer";

describe("Customer", () => {
  let customer1: Customer;
  let customer2: Customer;

  beforeEach(() => {
    customer1 = new Customer("Stacy", 500);
    customer2 = new Customer("Ashido", 1000);
  });

  it("should create a customer with name and a initial deposit", () => {
    expect(customer1.name).toBe("Stacy");
    expect(customer1.getBalance()).toBe(500);
  });

  describe("deposit", () => {
    it("should deposit the amount in the customers account if amount is greater than 0", () => {
      customer1.deposit(100);
      expect(customer1.getBalance()).toBe(600);
    });

    it("should not deposit the amount in the customers account if amount is less than 0", () => {
      customer1.deposit(-100);
      expect(customer1.getBalance()).toBe(500);
    });

    it("should not update the balance in the customers account if amount is 0", () => {
      customer1.deposit(0);
      expect(customer1.getBalance()).toBe(500);
    });
  });

  describe("withdraw", () => {
    it("should update the balance when the amount is withdrawn", () => {
      customer1.withdraw(100);
      expect(customer1.getBalance()).toBe(400);
    });

    it("should not withdraw balance if amount is 0", () => {
      customer1.withdraw(0);
      expect(customer1.getBalance()).toBe(500);
    });

    it("should not change balance if amount is negative", () => {
      customer1.withdraw(-50);
      expect(customer1.getBalance()).toBe(500);
    });

    it("should not allow withdrawal if amount is greater than balance", () => {
      customer1.withdraw(1500);
      expect(customer1.getBalance()).toBe(500);
    });
  });

  describe("getBalance", () => {
    it("should return the balance of a customer", () => {
      expect(customer1.getBalance()).toBe(500);
    });
  });

  describe("transfer", () => {
    it("should transfer the amount from one customer to another", () => {
      customer1.transfer(100, customer2);
      expect(customer1.getBalance()).toBe(400);
      expect(customer2.getBalance()).toBe(1100);
    });

    it("should not transfer if the amount is greater than balance", () => {
      customer1.transfer(550, customer2);
      expect(customer1.getBalance()).toBe(500);
      expect(customer2.getBalance()).toBe(1000);
    });

    it("should not transfer if the amount is 0", () => {
      customer1.transfer(0, customer2);
      expect(customer1.getBalance()).toBe(500);
      expect(customer2.getBalance()).toBe(1000);
    });
  });
});
