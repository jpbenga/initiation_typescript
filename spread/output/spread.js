"use strict";
//Variables
const stringArray = ["titi", "tata", "toto"];
//Fonctions
function countTotalLetters(...words) {
    let countLetters = 0;
    for (const word of words) {
        countLetters += word.length;
    }
    return countLetters;
}
//Exécutions
console.log(countTotalLetters(...stringArray)); //12
console.log(countTotalLetters("La", "mer", "est", "bleue")); //13
console.log(countTotalLetters("Manger", "c'est", "bon")); //14
console.log(countTotalLetters("Les", "chaussettes", "de", "l'archiduchesse", "sont", "elles", "sèches")); // 46
