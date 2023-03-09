function Person(fname = "hassan", lname = "khan", age = 23) {
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
}

function Student(fname, lname, age, regNo, gpa) {
    Person.call(this, fname, lname, age);

    this.regNo = regNo;
    this.gpa = gpa;

}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;
const st = new Student("umair", "akhtar", 22, 73, 3.7);
console.log(st);


function Employee(fname, lname, age, department, designation, salary) {
    Person.call(this, fname, lname, age);
    this.department = department;
    this.designation = designation;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.constructor = Employee;
const em = new Employee("umair", "akhtar", 22, "CS", "SE", 150000);
console.log(em);


function Teacher(fname, lname, age, department, designation, salary, speciality, professor = false, course) {
    Employee.call(this, fname, lname, age, department, designation, salary);
    this.speciality = speciality;
    this.professor = professor;
    this.course = course;
}

function Courses(title = "Ali") {

    this.courseTitle = title;

}

const cors = new Courses("ITM033");
Teacher.prototype = Object.create(Teacher.prototype);

Teacher.prototype.constructor = Teacher;
const teacher = new Teacher("umair", "akhtar", 22, "CS", "SE", 150000, "Discreet", true, cors);
console.log(teacher);

function Staff(fname, lname, age, department, designation, salary, staftype, course) {
    Employee.call(this, fname, lname, age, department, designation, salary);
    this.staftype = staftype;
    this.course = course;
}

Staff.prototype = Object.create(Staff.prototype);

Staff.prototype.constructor = Staff;
const staf = new Staff("umair", "akhtar", 22, "CS", "SE", 150000, "sweaper", cors);
console.log(staf);
