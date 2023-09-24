interface Year {
    day: number,
    month: number,
    year: number,
    time?: Time
}

interface Time{
    hours: number,
    minutes: number,
    seconds: number
}

function getDateString(params: Year){
    let dateString = `${params.day}/${params.month}/${params.year}`;

    if(params.time){
        let time = params.time;
        dateString += ` ${time.hours}:${time.minutes}:${time.seconds}`;
        return dateString;
    }
}

const dateTime: Year = {
    day: 3,
    month: 3,
    year: 2023,
    time: {
        hours: 12,
        minutes: 12,
        seconds: 24
    }
}

const date: Year = {
    day: 3,
    month: 3,
    year: 2023,
}

const time: Time = {
    hours: 12,
    minutes: 12,
    seconds: 24
}

// const dateHour: Year = {
//     day: 3,
//     month: 3,
//     year: 2023,
//     time: {
//         hours: 12,
//     }    
// }

getDateString(dateTime)
getDateString(date)
//getDateString(time)
//getDateString(dateHour)
