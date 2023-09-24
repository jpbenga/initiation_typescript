// Classes et Intrfaces
enum ShapeKind{
    Square,
    Rectangle,
    Circle
}

interface Square  {
    kind: ShapeKind.Square;
    size: number;
}

interface Rectangle {
    kind: ShapeKind.Rectangle;
    width: number;
    height: number;
}

interface Circle{
    kind: ShapeKind.Circle
    radius: number
}

//Variables
type Shape = Square|Rectangle|Circle

const circle: Shape = {
    kind: ShapeKind.Circle,
    radius: 4
}

const square: Shape = {
    kind: ShapeKind.Square,
    size: 6
}

const rectangle: Shape = {
    kind: ShapeKind.Rectangle,
    width: 4,
    height: 6
}

//Fonctions
function area(param: Shape): void{
    switch(param.kind){
        case ShapeKind.Circle:
        const aireCircle: number = Math.PI * (param.radius * param.radius)
        console.log("L'aire est de: " + aireCircle)
        break;

        case ShapeKind.Rectangle:
        const aireRectangle: number = param.width * param.height
        console.log("L'aire est de: " + aireRectangle)
        break;

        case ShapeKind.Square:
        const aireSquare: number = param.size * param.size
        console.log("L'aire est de: " + aireSquare)
    }
}

function perimeters(param: Shape): void{
    if(param.kind == ShapeKind.Circle){
        const perimeterCircle: number = 2 * Math.PI * param.radius
        console.log("Le perimetre est de: " + perimeterCircle)
    }else if(param.kind == ShapeKind.Rectangle){
        const perimeterRectangle: number = (param.height + param.width) * 2
        console.log("Le perimetre est de: " + perimeterRectangle)
    }else{
        const perimeterSquare: number = param.size * 4
        console.log("Le perimetre est de: " + perimeterSquare)
    }

    //Executions
    area(circle)
    console.log("-------------------")
    area(rectangle)
    console.log("-------------------")
    area(square)
    console.log("-------------------")
    console.log("------------perimetre------------")
    perimeters(circle)
    console.log("-------------------")
    perimeters(rectangle)
    console.log("-------------------")
    perimeters(square)
    console.log("-------------------")
}