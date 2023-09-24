interface Person{
    firstName: string
    lastName: string
}

interface Employee{
    employeeId: number
    salary: number
}

interface Manager{
    stockPlan: boolean
}

type ManagementEmployee = Person & Employee & Manager

let employee: ManagementEmployee = {firstName: "jean-paul", lastName: "benga", employeeId: 11, salary:9000, stockPlan: false}

function sayHello(employee: ManagementEmployee): void{
    console.log(`Prénom:  ${employee.firstName}`)
    console.log(`Nom:  ${employee.lastName}`)
    console.log(`Id:  ${employee.employeeId}`)
    console.log(`salary:  ${employee.salary}€`)
    console.log(`stockPlan:  ${employee.firstName}`)   
}

sayHello(employee)


