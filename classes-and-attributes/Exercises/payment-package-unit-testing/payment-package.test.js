const PaymentPackage = require("./payment-package");
const { assert, expect } = require("chai");

describe("overall behaviour", () => {
  it("should return valid information when given correct input", () => {
    expect(() => new PaymentPackage("string", 1)).not.to.throw(Error);
  });
});

describe("name property tests", () => {
  it("should throw error when name prop is a number", () => {
    expect(() => new PaymentPackage(1, 1)).to.throw(Error);
  });

  it("should throw error when name prop is empty string", () => {
    expect(() => new PaymentPackage("", 1)).to.throw(
      "Name must be a non-empty string"
    );
  });

  it("should throw error when name prop is null", () => {
    expect(() => new PaymentPackage(null, 1)).to.throw(Error);
  });

  it("should throw error when name prop is undefined", () => {
    expect(() => new PaymentPackage(undefined, 1)).to.throw(Error);
  });
});
describe("value property tests", () => {
  it("it should throw errow when value prop is negative", () => {
    expect(() => new PaymentPackage("string", -1)).to.throw(
      "Value must be a non-negative number"
    );
  });

  it("should throw error when value prop is a string", () => {
    expect(() => new PaymentPackage("string", "string2")).to.throw(
      "Value must be a non-negative number"
    );
  });

  it("should throw error when value prop is null", () => {
    expect(() => new PaymentPackage("string", null)).to.throw(
      "Value must be a non-negative number"
    );
  });

  it("should throw error when value prop is undefined", () => {
    expect(() => new PaymentPackage("string", undefined)).to.throw(
      "Value must be a non-negative number"
    );
  });
});
describe("VAT property tests", () => {
  it("should throw error when VAT prop is negative", () => {
    expect(() => (new PaymentPackage("string", 1).VAT = -1)).to.throw(
      "VAT must be a non-negative number"
    );
  });
  it("should behave correctly  when VAT prop is number", () => {
    expect((new PaymentPackage("string", 1).VAT = 1)).to.be.a("number");
  });
});
describe("active propert tests", () => {
  it("should behave correctly when active prop is a boolean", () => {
    expect(new PaymentPackage("test", 1).active).to.be.a("boolean");
  });
  it("should throw error when active prop is a number", () => {
    expect(() => (new PaymentPackage("test", 1).active = 1)).throw(
      "Active status must be a boolean"
    );
  });
  it("should throw error when active prop is a string", () => {
    expect(() => (new PaymentPackage("test", 1).active = "a")).throw(Error);
  });
});

describe("toString method tests", () => {
  it("should behave correctly with status active", () => {
    expect(new PaymentPackage("String", 1).toString()).to.equal(`Package: String
- Value (excl. VAT): 1
- Value (VAT 20%): 1.2`);
  });

  it("should behave correctly with status inactive", () => {
    const example = new PaymentPackage("String", 1);
    example.active = false;
    expect(example.toString()).to.equal(`Package: String (inactive)
- Value (excl. VAT): 1
- Value (VAT 20%): 1.2`);
  });
});
