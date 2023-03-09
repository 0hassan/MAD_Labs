// Define the Employee class
class Employee {
    constructor(name = "", dept = "general") {
        this.name = name;
        this.dept = dept;
    }
}
// Define the Manager class
class Manager extends Employee {
    constructor(name = "", dept = "general", reports = []) {
        super(name, dept);
        this.reports = reports;
    }
}
// Define the WorkerBee class
class WorkerBee extends Employee {
    constructor(name = "", dept = "general", projects = []) {
        super(name, dept);
        this.projects = projects;
    }
}
// Define the SalesPerson class
class SalesPerson extends WorkerBee {
    constructor(name = "", dept = "sales", projects = [], quota = 100) {
        super(name, dept, projects);
        this.quota = quota;
    }
}
// Define the Engineer class
class Engineer extends WorkerBee {
    constructor(name = "", dept = "engineering", projects = [], machine = "") {
        super(name, dept, projects);
        this.machine = machine;
    }
}

// Create instances of the classes
const emp1 = new Employee("John Doe");
const mgr1 = new Manager("Jane Smith", "Operations", [emp1]);
const wrk1 = new WorkerBee("Bob Johnson", "Marketing", ["Project A"]);
const sls1 = new SalesPerson("Sarah Davis", undefined, ["Project B"], 200);
const eng1 = new Engineer("Mike Lee", undefined, ["Project C"], "Machine X");

// Print the information of the instances
console.log("Employee 1:", emp1);
console.log("Manager 1:", mgr1);
console.log("Worker Bee 1:", wrk1);
console.log("Sales Person 1:", sls1);
console.log("Engineer 1:", eng1);