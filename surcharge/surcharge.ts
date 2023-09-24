//toDate(1,1,2023)

function toDate(jour: number, mois: number, annee: number):Date{
    const date = new Date(annee, mois, jour)
    console.log(date)
    return date
}

function toDate(jour: number):Date{
    const date = new Date(jour)
    console.log(date)
    return date
}

function toDate(jour: number, mois?: number, annee?: number): Date | undefined {
    if (mois !== undefined && annee !== undefined) {
        const date = new Date(annee, mois - 1, jour);
        console.log(date);
        return date;
    } else if (jour !== undefined) {
        const date = new Date(jour);
        console.log(date);
        return date;
    }
    return undefined;
}

// function toDate(jour: number, mois?: number, annee?: number, ):Date|undefined{
//     if(jour !== undefined){
//         const date = new Date(jour)
//         console.log(date)
//         return date
//     }else if(mois !== undefined && annee !== undefined){
//         const date = new Date(annee, mois, jour)
//         console.log(date)
//         return date
//         }
//         return undefined
//     }