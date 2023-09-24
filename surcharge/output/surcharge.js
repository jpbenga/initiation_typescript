"use strict";
toDate(1, 1, 2023);
function toDate(jour, mois, annee) {
    const date = new Date(annee, mois, jour);
    console.log(date);
    return date;
}
