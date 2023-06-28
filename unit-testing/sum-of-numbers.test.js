const sum = require("./sum-of-numbers");
const { assert } = require("chai");

describe("sum function unit tests", () => {
  it("should return the sum when integers are given", () => {
    assert.equal(sum([1, 2, 3, 4, 5]), 15);
  });

  it("should return 0 when an empty array is given", () => {
    assert.equal(sum([]), 0);
  });

  it("should return sum when a string-number is given", () => {
    assert.equal(sum(['1',2,3,4,5]), 15);
  });

  it("should return NaN when undefined is given", () => {
    assert.isNaN(sum([undefined]));
  });

  it("should return NaN when string array is given", () => {
    assert.isNaN(sum('a','b'))
  });

  it("should return NaN when object array is given", () => {
    assert.isNaN(sum([{}, {}]))
  });
});
