import { Bank } from "../src/bank";

describe("Bank", () => {
  let bank: Bank;

  beforeEach(() => {
    bank = new Bank();
  });

  it("should have an empty list of customers initially", () => {
    expect(bank.customers).toEqual([]);
  });

  describe("addCustomer", () => {
    it("should add a customer to the bank", () => {
      bank.addCustomer("Boruto", 3000);
      expect(bank.customers.length).toBe(1);
      expect(bank.customers[0].name).toBe("Boruto");
      expect(bank.customers[0].getBalance()).toBe(3000);
    });
  });

  describe("getTotalBalance", () => {
    it("should return 0 if total no. of customers is 0", () => {
      expect(bank.getTotalBalance()).toBe(0);
    });

    it("should return the total balance of all customer accounts in the bank", () => {
      bank.addCustomer("Naruto", 1000);
      bank.addCustomer("Hinata", 1200);
      expect(bank.getTotalBalance()).toBe(2200);
    });

    it("should return the correct total balance after deposits and withdrawals", () => {
      bank.addCustomer("Boruto", 500);
      bank.addCustomer("Sarada", 400);
      bank.customers[0].deposit(1000);
      bank.customers[1].withdraw(500);
      expect(bank.getTotalBalance()).toBe(1900);
    });
  });
});
