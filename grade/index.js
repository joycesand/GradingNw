const marks = require("./models/marks");
const student = require("./models/student");

var Sandra = new student("Sandra" , "Nanteza" , "Single" , 20);

const sandraGrade = new marks("SST",`${Sandra.secondName} ${Sandra.firstName}`,60);
sandraGrade.computeGrade();

const hajiGrade = new marks("Islam","Haruna",90);
hajiGrade.computeGrade();