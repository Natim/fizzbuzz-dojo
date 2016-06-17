var expect = require("chai").expect;
var fizzbuzz = require("../src/index").fizzbuzz;

describe("FizzBuzz", () => {
  it("should return fizzbuzz for 0", () => {
    expect(fizzbuzz(0)).eql("fizzbuzz");
  });

  it("should return 1 for 1", () => {
    expect(fizzbuzz(1)).eql(1);
  });

  it("should return fizz for 3", () => {
    expect(fizzbuzz(3)).eql("fizz");
  });

  it("should return fizzbuzz for 15", () => {
    expect(fizzbuzz(15)).eql("fizzbuzz");
  });

  it("should return buzz for 5", () => {
    expect(fizzbuzz(5)).eql("buzz");
  });

  it("should return buzz for 10", () => {
    expect(fizzbuzz(10)).eql("buzz");
  });

  it("should return 17 for 17", () => {
    expect(fizzbuzz(17)).eql(17);
  });

  it("should return fizz for 6", () => {
    expect(fizzbuzz(6)).eql("fizz");
  });

  it("should return buzz for 25", () => {
    expect(fizzbuzz(25)).eql("buzz");
  });

  it("should return NaN for NaN", () => {
    expect(fizzbuzz(NaN)).eql(NaN);
  });

  it("should return 3.0001 for 3.0001", () => {
    expect(fizzbuzz(3.0001)).eql(3.0001);
  });

  it("should throw an error for '3'", () => {
    expect(() => fizzbuzz('3')).throw(Error);
  });
});
