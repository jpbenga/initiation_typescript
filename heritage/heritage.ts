interface Person{
    firstName: string
    lastName: string
}

interface Employee extends Person{
    employeeId: number
    salary: number
}

interface Manager extends Employee{
    stockPlan: boolean
}

interface Client extends Person{
    clientId: number
    points: number
}


let manager: Manager = {firstName: "jean-paul", lastName: "benga", employeeId: 11, salary:9000, stockPlan: false}

let client: Client = {firstName: "Itachi", lastName: "Uchiwa", clientId: 99, points: 100}

function sayHello(employee: Manager): void{
    console.log(`Prénom:  ${employee.firstName}`)
    console.log(`Nom:  ${employee.lastName}`)
    console.log(`Id:  ${employee.employeeId}`)
    console.log(`salary:  ${employee.salary}€`)
    console.log(`stockPlan:  ${employee.firstName}`)   
}

function display(client: Client): void{
    console.log(`Prenom: ${client.firstName} `)
    console.log(`Nom: ${client.lastName} `)
    console.log(`Client Id: ${client.clientId} `)
    console.log(`Points: ${client.points} `)
}

sayHello(manager)
display(client)


