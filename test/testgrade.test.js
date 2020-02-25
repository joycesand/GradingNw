const mark = require("../index");

test("testing the mark is a number", () => {
  // expect(typeof(mark.marks)).toBe('number') Makes the test to pass
  expect(mark.isValidate()).toBe(true);
});

  test("testing the grade Mark", () => {
  expect(mark.computeScore()).toBe('A')
});

