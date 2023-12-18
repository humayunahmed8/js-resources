
// Create Class 
class Student{
    // Constructor for create object 
    constructor(Id, name) {
        this.id = Id;
        this.name = name;
        this.school = "Nizkhunjara High School";
    }
}

// Create Object 
const studentOne = new Student(12, "Rahman");
const studentTwo = new Student(13, "Ahsan");
const specific = Student.name; // Call using constructor property 

console.log(specific);