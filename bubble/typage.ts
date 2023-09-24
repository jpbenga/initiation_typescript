function sum(x: string, y:string): number{
    let x1 = parseInt(x);
    let y2 = parseInt(y);
    return x1 + y2
}

function display(array: Array<number>): void{
    for(const number of array){
        console.log(number)
    }
}

let compare: (n1: number, n2: number) => boolean = function (number1: number, number2: number){ return number1 == number2}

console.log(sum("1", "2"));

display([1, 2, 3]);

console.log(compare(1, 2));