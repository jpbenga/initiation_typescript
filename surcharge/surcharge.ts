//toDate(1,1,2023)

function toDate(jour: number, mois: number, annee: number): Date

function toDate(jour: number): Date 

function toDate(jour: number, mois?: number, annee?: number): Date {
    if (mois !== undefined && annee !== undefined) {
        const date = new Date(annee, mois, jour);
        console.log(date);
        return date;
    } else {
        const date = new Date(jour);
        console.log(date);
        return date;
    }
}