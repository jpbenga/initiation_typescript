"use strict";
// Problème à l'affichage : 10 10 10 10 10 10 10 10 10 10
// Comment faire en sorte d'afficher simplement : 0 1 2 3 4 5 6 7 8 9 ?
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
// Peut-on interchanger les 2 déclarations de variable ci-dessous ? NON
let x = 0;
{
    let x = 0;
}
// Apportez de la sémantique au code suivant en utilisant let et const
const PI = 3.14;
function calculerAireCercle(rayon) {
    return PI * 2 * rayon;
}
let aire = calculerAireCercle(2);
aire = calculerAireCercle(5);
