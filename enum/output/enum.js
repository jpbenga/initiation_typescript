"use strict";
// Classes et Intrfaces
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Square"] = 0] = "Square";
    ShapeKind[ShapeKind["Rectangle"] = 1] = "Rectangle";
    ShapeKind[ShapeKind["Circle"] = 2] = "Circle";
})(ShapeKind || (ShapeKind = {}));
const circle = {
    kind: ShapeKind.Circle,
    radius: 4
};
const square = {
    kind: ShapeKind.Square,
    size: 6
};
const rectangle = {
    kind: ShapeKind.Rectangle,
    width: 4,
    height: 6
};
//Fonctions
function area(param) {
    switch (param.kind) {
        case ShapeKind.Circle:
            const aireCircle = Math.PI * (param.radius * param.radius);
            console.log("L'aire est de: " + aireCircle);
            break;
        case ShapeKind.Rectangle:
            const aireRectangle = param.width * param.height;
            console.log("L'aire est de: " + aireRectangle);
            break;
        case ShapeKind.Square:
            const aireSquare = param.size * param.size;
            console.log("L'aire est de: " + aireSquare);
    }
}
function perimeters(param) {
    if (param.kind == ShapeKind.Circle) {
        const perimeterCircle = 2 * Math.PI * param.radius;
        console.log("Le perimetre est de: " + perimeterCircle);
    }
    else if (param.kind == ShapeKind.Rectangle) {
        const perimeterRectangle = (param.height + param.width) * 2;
        console.log("Le perimetre est de: " + perimeterRectangle);
    }
    else {
        const perimeterSquare = param.size * 4;
        console.log("Le perimetre est de: " + perimeterSquare);
    }
    //Executions
    area(circle);
    console.log("-------------------");
    area(rectangle);
    console.log("-------------------");
    area(square);
    console.log("-------------------");
    console.log("------------perimetre------------");
    perimeters(circle);
    console.log("-------------------");
    perimeters(rectangle);
    console.log("-------------------");
    perimeters(square);
    console.log("-------------------");
}
