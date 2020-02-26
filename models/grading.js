class Marks {
    constructor(subject, student, marks) {
      this.subject = subject;
      this.student = student;
      this.marks = marks;
    }
    computeScore() {
      if (this.marks > 80) {
        console.log("You have an A");
      } else if (this.marks > 70 && this.marks < 80) {
        console.log("You have a B");
      } else if (this.marks > 60 && this.marks < 70) {
        console.log("You have a C");
      } else if (this.marks > 50 && this.marks < 60) {
        console.log("You have a D");
      } else if (this.marks > 40 && this.marks < 50) {
        console.log("You have an E");
      } else if (this.marks > 0 && this.marks < 40) {
        console.log("You have an F");
      }
    }
    isValidate() {
      let valid = true;
      if (this.student === null) {
        valid = false;
      }
      if (typeof this.marks !== "number") {
        valid = false;
      }
      if (this.marks < 0) {
        valid = false;
        console.log("Marks be less than 100");
      }
    }
  }