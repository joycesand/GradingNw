const marks = require("../models/marks");
const student = require("../models/student");

//describe creates a test suite
describe("Marks Test", () => {
  it("It should return false when a number is not entered", () => {

    let testMark = new marks("Islam", "Haruna", "eighty");

    expect(testMark.isValidate()).toEqual(false);
  });

  it("It should return true when a number entered", () => {
    let testMark = new marks("Islam", "Haruna", 80);

    expect(testMark.isValidate()).toBeTruthy();
  });

  it("It should return false when a number less than 0 is entered", () => {
    let testMark = new marks("Islam", "Haruna", -1);

    expect(testMark.isValidate()).toEqual(false);
  });

  it("It should return false when a number greater than 100 is entered", () => {
    let testMark = new marks("Islam", "Haruna", 800);

    expect(testMark.isValidate()).toEqual(false);
  });


});
