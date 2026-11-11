// Parent Class
class Employee {

    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    displayEmployee() {
        console.log("Employee Name: " + this.name);
        console.log("Employee ID: " + this.id);
        console.log("Basic Salary: " + this.salary);
    }
}

// Child Class
class Manager extends Employee {

    constructor(name, id, salary, department) {

        super(name, id, salary);

        this.department = department;
    }

    displayManager() {

        console.log("========== EMPLOYEE DETAILS ==========");

        this.displayEmployee();

        console.log("Department: " + this.department);

        console.log("=======================================");
    }
}

// Creating Object
let manager1 = new Manager("Rahul", "EMP101", 50000, "IT");
let manager2 = new Manager("Anjali", "EMP102", 60000, "HR");

// Calling Method
manager1.displayManager();
manager2.displayManager();