class Marks {
    constructor(subject,student,marks){
        this.subject=subject
        this.student=student
        this.marks=marks
        
    }
    computeGrade() {
        let grade = null;
        if(this.marks>=80){
            console.log(`${this.student}, you are in grade A`)
            grade = 'A'
        }else if(this.marks>=70&&this.marks<80){
            console.log(`${this.student}, you are in grade B`)
            grade = 'B'
        }
        else if(this.marks>=60&&this.marks<70){
            console.log(`${this.student}, you are in grade C`)
            grade = 'C'
        }
        else if(this.marks>=50&&this.marks<60){
            console.log(`${this.student}, you are in grade D`)
            grade = 'D'
        }
        else if(this.marks>=40&&this.marks<50){
            console.log(`${this.student}, you are in grade E`)
            grade = 'E'
        }
        else if(this.marks>0 &&this.marks<40){
            console.log(`${this.student}, you are in grade F`)
            grade = 'F'
        }
        
        return grade
    }
    
    isValidate(){

        var valid=true

        if(this.student===null){
            valid=false
            console.log("student doesnt exist")
        }
        if(typeof(this.marks)!=="number"){
            valid=false
            console.log("please put in a number")
        }
        if(this.marks<0){
            valid=false
            console.log("Mark should be greater than zero")
        }
        if(this.marks>100){
            valid=false
            console.log("Mark should be less than 100")
        }

        return valid
    } 
}
 
module.exports=Marks;