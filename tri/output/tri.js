"use strict";
let monTableau = [9, 2, 8, 6, 3, 1, 7, 4, 5];
function afficherMonTableau(tableau) {
    for (const number of tableau) {
        console.log(number);
    }
}
function trierMonTableau(tableau) {
    let echange;
    do {
        echange = false;
        for (let i = 0; i < tableau.length - 1; i++) {
            if (tableau[i] > tableau[i + 1]) {
                [tableau[i], tableau[i + 1]] = [tableau[i + 1], tableau[i]];
                echange = true;
            }
        }
        console.log(tableau);
    } while (echange == true);
}
//afficherMonTableau(monTableau);
trierMonTableau(monTableau);
