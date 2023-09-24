type IntStr = string|number

function verifierOperand(operand: IntStr){
    typeof(operand) == "string"? console.log("l'operand est de type string"): console.log("l'operand est de type nombre")
}

let nombre: number = 8
let mot: string = "hello"
let hasard: IntStr = 23

verifierOperand(nombre)
verifierOperand(mot)
verifierOperand(hasard)