// Define the Person class
function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}
// Define the Student class
function Student(name, age, address, rollNumber, batch) {
    Person.call(this, name, age, address);
    this.rollNumber = rollNumber;
    this.batch = batch;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
// Define the Employee class
function Employee(
    name,
    age,
    address,
    employeeId,
    department,
    designation,
    salary
) {
    Person.call(this, name, age, address);
    this.employeeId = employeeId;
    this.department = department;
    this.designation = designation;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
// Define the Teacher class
function Teacher(
    name,
    age,
    address,
    employeeId,
    department,
    designation,
    salary,
    subject
) {
    Employee.call(
        this,
        name,
        age,
        address,
        employeeId,
        department,
        designation,
        salary
    );
    this.subject = subject;
}

Teacher.prototype = Object.create(Employee.prototype);
Teacher.prototype.constructor = Teacher;
// Define the Staff class
function Staff(
    name,
    age,
    address,
    employeeId,
    department,
    designation,
    salary,
    jobTitle
) {
    Employee.call(
        this,
        name,
        age,
        address,
        employeeId,
        department,
        designation,
        salary
    );
    this.jobTitle = jobTitle;
}

Staff.prototype = Object.create(Employee.prototype);
Staff.prototype.constructor = Staff;

// Define the Courses class
function Courses(name, teacher, students) {
    this.name = name;
    this.teacher = teacher;
    this.students = students;
}

// Create objects of Student, Teacher and Staff classes
var student1 = new Student("John Doe", 18, "123 Main Street", 1001, "Batch A");
var student2 = new Student("Jane Smith", 19, "456 Maple Ave", 1002, "Batch B");

var teacher1 = new Teacher(
    "Mr. Smith",
    35,
    "789 Elm St",
    2001,
    "Math",
    "Professor",
    50000,
    "Calculus"
);
var teacher2 = new Teacher(
    "Ms. Johnson",
    40,
    "101 Oak St",
    2002,
    "English",
    "Professor",
    60000,
    "Composition"
);

var staff1 = new Staff(
    "Mr. Davis",
    30,
    "555 Pine St",
    3001,
    "Admin",
    "Coordinator",
    45000,
    "Admissions"
);
var staff2 = new Staff(
    "Ms. Garcia",
    28,
    "222 Cedar St",
    3002,
    "Finance",
    "Accountant",
    40000,
    "Payroll"
);

// Print the information of the created objects
console.log("Student 1:", student1);
console.log("Student 2:", student2);

console.log("Teacher 1:", teacher1);
console.log("Teacher 2:", teacher2);

console.log("Staff 1:", staff1);
console.log("Staff 2:", staff2);