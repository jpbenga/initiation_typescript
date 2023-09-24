"use strict";
//Variables
const jpBengs = createPerson();
const prenom = createPerson().firstName;
const nom = createPerson().lastName;
//Fonctions
function createPerson() {
    return { firstName: "jean paul", lastName: "benga" };
}
function display({ firstName, lastName }) {
    console.log("Prenom", firstName);
    console.log("Nom", lastName);
}
//Executions
console.log(jpBengs);
console.log(prenom);
console.log(nom);
display({ firstName: "jean paul", lastName: "benga" });
