class Marks {
    constructor(subject, student, marks) {
      this.subject = subject;
      this.student = student;
      this.marks = marks;
    }
    computeScore() {
      var score = null;
      if (this.marks >= 80) {
        console.log(`${this.student},you are in grade A`);
        score = 'A'
  
      } else if (this.marks >= 70 && this.marks < 80) {
        console.log("You have a B");
        score = 'B'
  
      } else if (this.marks >= 60 && this.marks < 70) {
        console.log("You have a C");
        score = 'C'
  
      } else if (this.marks >= 50 && this.marks < 60) {
        console.log("You have a D");
        score = 'D'
  
      } else if (this.marks >= 40 && this.marks < 50) {
        console.log("You have an E");
        score = 'E'
  
      } else if (this.marks > 0 && this.marks < 40) {
        console.log("You have an F");
        score = 'F'
      }
      return score  // This returns the tests for all the computeScore.
    }
    isValidate() {
      let valid = true;
      if (this.student === null) {
        valid = false;
        console.log("student does not exist");
      }
      if (typeof this.marks !== "number") {
        valid = false;
        console.log("Please put in a number");
      }
      if (this.marks < 0) {
        valid = false;
        console.log("Mark should be greater than zero");
      }
      if (this.marks > 100) {
        valid = false;
        console.log("Mark should be less than 100");
      }
      return valid // This returns all the test for isValidate.
    }
   
  }
  module.exports = Marks;
  