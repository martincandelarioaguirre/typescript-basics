abstract class Department {
    constructor(public name: string){
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; //must be implemented in derived class.
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");// constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The accounting Departament meets each Monday at 10 am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports");
    }
}

export class RunAbstractClass {
    run() {
        let department: Department;
        department = new AccountingDepartment();
        department.printName();
        department.printMeeting();
        //department.generateReports();
    }
}