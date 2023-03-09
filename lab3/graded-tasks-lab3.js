function Person(fname="hassan", lname = "khan", age = 23) {
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
}


function Student(fname, lname, age, regNo, gpa) {
    Person.call(this,fname,lname, age);

    this.regNo = regNo;
    this.gpa = gpa;

}





Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;
const st= new Student("umair", "akhtar", 22, 73, 3.7);
console.log(st);


//     function Employee(fname, lname, age, department, designation, salary) {
//         super(fname, lname, age);
//         this.department = department;
//         this.designation = designation;
//         this.salary = salary;
//     }
// //     toString() {
// //         return super.toString() + "\nDepartment: " + this.department + "\nDesignation: " + this.designation + "\nSalary: " + this.salary;
// //     }
// // }



// function Teacher(fname, lname, age, department, designation, salary, speciality, professor = false, course) {
//         super(fname, lname, age, department, designation, salary);
//         this.speciality = speciality;
//         this.professor = professor;
//         this.course = course;
//     }


// function Staff () {

// }

// function Courses(title) {

//     this.courseTitle = title;

// }

// const cors = new Courses("ITM033");
// const t1 = new Teacher("umair", "akhtar", 22, "CS", "SE", 150000, "Discreet", true, cors);
// console.log(t1);
