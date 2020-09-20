

const expect = require('expect');
const fizzbuzz = require ("../index");

describe("fizzbuzz", ()=> {
  it ("returns FizzBuzz when value is divisible by 15", () => {
    expect(fizzbuzz(30)).toBe("FizzBuzz");
  });

  it ("returns FizzBuzz when value is divisible by 3", () => {
    expect(fizzbuzz(9)).toBe("Fizz");
  });

  it ("returns FizzBuzz when value is divisible by 5", () => {
    expect(fizzbuzz(10)).toBe("Buzz");
  });

  it ("returns FizzBuzz when value is divisible by 3 or 5", () => {
    expect(fizzbuzz(7)).toBe("7");
  });
});

