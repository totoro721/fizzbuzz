


const fizzbuzz = require ("../index");

descrie("fizzbuzz", ()=> {
  if ("returns FizzBuzz when value is divisible by 15", () => {
    expect(fizzbuzz(30).toStrictEqual("FizzBuzz");
  });

  if ("returns FizzBuzz when value is divisible by 3", () => {
    expect(fizzbuzz(9).toStrictEqual("Fizz");
  });

  if ("returns FizzBuzz when value is divisible by 5", () => {
    expect(fizzbuzz(10).toStrictEqual("Buzz");
  });

  if ("returns FizzBuzz when value is divisible by 3 or 5", () => {
    expect(fizzbuzz(7).toStrictEqual("7");
  });
});
