//  write the test cases for the sum function in sum.js file using jest framework

// we write a function ---> test()
/**
 * test() function takes two arguments
 * 1. name of the test case (string)
 * 2. callback function which contains the logic of the test case
 */
import { sum } from "../sum";
test("sum function should calculate the sum of two numbers", () => {
  const result = sum(2, 3); // 5
  // expect() function is used to check the result of the test case
  expect(result).toBe(5); // This line known as ---->Assertion
});
