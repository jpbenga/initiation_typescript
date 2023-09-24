"use strict";
//Classes et interfaces
var TodoStatus;
(function (TodoStatus) {
    TodoStatus["Todo"] = "A faire";
    TodoStatus["InProgress"] = "En cours";
    TodoStatus["Done"] = "Fait";
})(TodoStatus || (TodoStatus = {}));
//Variables
let cinema = {
    id: 1,
    title: "cinema",
    status: TodoStatus.Done,
};
let foot = {
    id: 2,
    title: "football",
    status: TodoStatus.Todo,
};
let reading = {
    id: 3,
    title: "reading",
    status: TodoStatus.Todo,
};
let study = {
    id: 3,
    title: "study",
    status: TodoStatus.InProgress,
};
const myTodoArray = [cinema, foot, reading, study];
//Fonctions
function displayTodo(todoArray) {
    for (let todo of todoArray) {
        console.log(todo.id);
        console.log(todo.title);
        console.log(todo.status);
        if (todo.completedOn) {
            console.log(todo.completedOn);
        }
    }
}
function addTodo(todo, array) {
    array.push(todo);
    console.log(array);
}
function modifyTodo(array, id, title) {
    const todoModify = array.find(todo => todo.id === id);
    todoModify ? todoModify.title = title : console.log("Cette id ne correspond à aucun Id");
    console.log(array);
}
function deleteTodo(array) {
    array.shift();
    console.log(array);
}
//Exécution
console.log("-------------------");
console.log("-----displaytodo-----");
console.log("-------------------");
displayTodo(myTodoArray);
console.log("-------------------");
console.log("-----addtodo-----");
console.log("-------------------");
addTodo({ id: 4, title: "go muscu", status: TodoStatus.Todo }, myTodoArray);
console.log("-------------------");
console.log("-----modifytodo-----");
console.log("-------------------");
modifyTodo(myTodoArray, 2, "fortnite");
console.log("-------------------");
console.log("-----deletetodo-----");
console.log("-------------------");
deleteTodo(myTodoArray);
