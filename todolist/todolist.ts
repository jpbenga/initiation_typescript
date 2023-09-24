//Classes et interfaces
enum TodoStatus{
    Todo = "A faire",
    InProgress = "En cours",
    Done = "Fait"
}

interface Todo {
    id: number
    title: string
    status: TodoStatus
    completedOn?: Date
}

//Variables
let cinema: Todo = {
    id: 1,
    title: "cinema",
    status: TodoStatus.Done,
}

let foot: Todo = {
    id: 2,
    title: "football",
    status: TodoStatus.Todo,
}

let reading: Todo = {
    id: 3,
    title: "reading",
    status: TodoStatus.Todo,
}

let study: Todo = {
    id: 3,
    title: "study",
    status: TodoStatus.InProgress,
}

const myTodoArray: Array<Todo> = [cinema, foot, reading, study]

//Fonctions
function displayTodo(todoArray: Array<Todo>){
    for(let todo of todoArray){
        console.log(todo.id)
        console.log(todo.title)
        console.log(todo.status)
        if(todo.completedOn){
            console.log(todo.completedOn)
        }
    }
}

function addTodo(todo: Todo, array: Array<Todo>): void{
    array.push(todo)
    console.log(array)
}

function modifyTodo(array: Array<Todo>, id: number, title: string): void{
    const todoModify = array.find(todo => todo.id === id);
    todoModify ? todoModify.title = title : console.log("Cette id ne correspond à aucun Id") 
    console.log(array)
}
function deleteTodo(array: Array<Todo>){
    array.shift()
    console.log(array)
}

//Exécution
console.log("-------------------")
console.log("-----displaytodo-----")
console.log("-------------------")
displayTodo(myTodoArray)
console.log("-------------------")
console.log("-----addtodo-----")
console.log("-------------------")
addTodo({id:4, title:"go muscu", status: TodoStatus.Todo}, myTodoArray)
console.log("-------------------")
console.log("-----modifytodo-----")
console.log("-------------------")
modifyTodo(myTodoArray, 2, "fortnite")
console.log("-------------------")
console.log("-----deletetodo-----")
console.log("-------------------")
deleteTodo(myTodoArray)