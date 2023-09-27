/**
 * Classes
 */
abstract class Person  {

    // ATTRIBUTS

    public firstName: string
    protected _lastName: string
    protected _age: number
    private readonly _gender: string

    constructor(firstName: string, lastName: string, gender: string, age?: number);

    constructor(user: User, gender: string, age?: number);

    constructor(firstNameOrUser: string|User, gender: string = "Inconnu", lastNameOrAge?: string|number, age?:number){
        if(typeof firstNameOrUser == "string" && lastNameOrAge == "string"){
            this.firstName = firstNameOrUser
            this._lastName = lastNameOrAge
            this._age = age === undefined ? 25 : age
            this._gender = gender
        } else {
            const user: User = {firstName: firstNameOrUser as string, lastName: lastNameOrAge as string}
            this.firstName = user.firstName;
            this._lastName = user.lastName;
            this._age = age === undefined ? 25 : age
            this._gender = gender
        }
    }

    //GETTER SETTER

    get lastName(): string{
        return this._lastName
    }

    set lastName(lastName: string){
        this._lastName = lastName
    }

    get age(): number{
        return this._age
    }

    set age(age: number){
        this._age = age
    }
    get gender(): string{
        return this._gender
    }

    //METHODES

    display(): void{
        console.log(`Hello i'm ${this.firstName} ${this.lastName}`)
    }

    getFullName(){
        console.log(`${this.firstName} ${this.lastName} ${this.age}`)
    }

    abstract amIOlderThanYou(yourAge: number): boolean
}

class Employee extends Person implements salaried{

    // ATTRIBUTS

    salary: number
    private readonly _employeeId: number
    static counter: number = 0

    constructor(
        firstName: string, 
        lastName: string, 
        gender: string, 
        age: number, 
        salary: number, 
        employeeId: number = 0
        ){
        super(firstName, lastName, gender, age)
        this.salary = salary
        this._employeeId = employeeId
        Employee.counter ++
        this._employeeId = Employee.counter
    }

    //GETTER SETTER

    public get employeeId(): number{
        return this._employeeId
    }

    // METHODES

    static getCounter(){
        return this.counter
    }

    giveSalary(): number {
        return this.salary
    }

    doWork(){
        console.log(`employee n° ${this._employeeId} I do my work ${this.salary}`)
    }

    display(): void {
        super.display()
        console.log(`, my employee id is ${this.employeeId} and i earn salary ${this.salary}`)
    }

    amIOlderThanYou(yourAge: number): boolean{
        return yourAge > this._age ? true: false
    }
}

class Manager extends Employee{

    // ATTRIBUTS

    private _sector: string
    private _employeeList: Array<Employee>

    constructor(
        firstName: string, 
        lastName: string, 
        gender: string, 
        age: number, 
        salary: number, 
        sector: string,
        employeeList: Array<Employee>
    ){
        super(firstName, lastName, gender, age, salary)
        this._sector = sector
        this._employeeList = employeeList
    }

    //GETTER SETTER

    get sector(): string{
        return this._sector
    }

    set sector(newSector: string){
        this._sector = newSector
    }

    get employeeList(): Array<Employee>{
        return this._employeeList
    }

    //METHODES

    display():void{
        super.display()
        console.log(`I'm also the manager of ${this._sector}`)
    }

    doWork(): void {
        super.doWork()
        console.log(`I do same job as an employee, but my salary is better`)
    }
}

class ListOfEmployees{

    constructor(private array: Array<Employee> = []){}

    //GETTER SETTER

    get list(): Array<Employee>{
        return this.array
    }

    //METHODES

    add(employee: Employee): void{
        this.array.push(employee)
    }

    remove(employee: Employee): Array<Employee>{
        this.array = this.array.filter((element) => element !== employee)
        return this.array
    }
}

class List<T>{

    constructor(private array: Array<T> = []){}

    //GETTER SETTER

    get list(): Array<T>{
        return this.array
    }

    //METHODES

    add(element: T): Array<T>{
        this.array.push(element)
        return this.array
    }

    remove(element: T): Array<T>{
        this.array = this.array.filter((item) => item !== element)
        return this.array
    }
}
/**
 * Interfaces
 */

interface User{
    firstName: string
    lastName: string
}

interface salaried{
    salary: number
    giveSalary(): number
}
/**
 * Executions
 */

// let jpbengs = new Person("Jp", "Benga", "m");
// jpbengs.display();
// jpbengs.getFullName();

// let userObj = { firstName: "Jp", lastName: "Bengs" };
// let jp: Person = new Person(userObj,"m", 34);
// jp.display();
// jp.getFullName();

// Création d'une instance d'Employee
// const employee = new Employee("John", "Doe", "Male", 30, 5000, 101);

// // Appel de différentes méthodes
// employee.display(); // Affiche : Hello i'm John Doe
// employee.getFullName(); // Affiche : John Doe 30
// employee.doWork(); // Affiche : employee n° 101 I do my work 5000
// const receivedSalary = employee.giveSalary();
// console.log(`Salary: ${receivedSalary}`); // Affiche : Salary: 5000

/**
 * Partie 4 : les statiques
 */

// Exemple d'utilisation avec plusieurs employés
// const employee1 = new Employee("John", "Doe", "Male", 30, 5000);
// const employee2 = new Employee("Jane", "Smith", "Female", 28, 5500);
// const employee3 = new Employee("Bob", "Johnson", "Male", 35, 6000);

// employee1.doWork(); // Affiche : Employee n° 1: I do my work (earn salary)
// employee2.doWork(); // Affiche : Employee n° 2: I do my work (earn salary)
// employee3.doWork(); // Affiche : Employee n° 3: I do my work (earn salary)

/**
 * Partie 5 Partie 5 : accessibilité et get/set
 */

// Création de quelques employés
// const employee1 = new Employee("John", "Doe", "Male", 30, 5000);
// const employee2 = new Employee("Jane", "Smith", "Female", 28, 5500);

// // Création d'un manager avec une liste d'employés
// const manager = new Manager("Alice", "Johnson", "Female", 35, 8000, "Sales", [employee1, employee2]);

// // Accès aux propriétés du manager
// console.log(`Manager Name: ${manager.firstName} ${manager.lastName}`);
// console.log(`Manager Gender: ${manager.gender}`);
// console.log(`Manager Age: ${manager.age}`);
// console.log(`Manager Sector: ${manager.sector}`);
// console.log(`Manager Employee List: ${manager.employeeList.map(employee => employee.firstName).join(', ')}`);

// // Modification du secteur du manager en utilisant le mutateur (setter)
// manager.sector = "Marketing";
// console.log(`Manager Sector (Updated): ${manager.sector}`);

/**
 * Partie 7
 */

// Création d'un objet ListOfEmployees
// const employeeList = new ListOfEmployees();

// // Création d'employés
// const employee1 = new Employee("John", "Doe", "Male", 30, 5000);
// const employee2 = new Employee("Jane", "Smith", "Female", 28, 5500);

// // Ajout des employés à la liste
// employeeList.add(employee1);
// employeeList.add(employee2);

// // Obtention de la liste des employés
// const employees = employeeList.list;
// console.log("Liste des employés :");
// console.log(employees);

// // Suppression d'un employé de la liste
// employeeList.remove(employee1);

// // Obtention de la liste mise à jour
// const updatedEmployees = employeeList.list;
// console.log("Liste des employés mise à jour :");
// console.log(updatedEmployees);

// Création d'un objet List<number>
const numberList = new List<number>();

// Ajout de nombres à la liste
numberList.add(10);
numberList.add(20);
numberList.add(30);

// Obtention de la liste de nombres
const numbers = numberList.list;
console.log("Liste de nombres :");
console.log(numbers);

// Suppression d'un nombre de la liste
numberList.remove(20);

// Obtention de la liste mise à jour
const updatedNumbers = numberList.list;
console.log("Liste de nombres mise à jour :");
console.log(updatedNumbers);