function typeUnion(obj: Array<number> | string): void{
    if(typeof(obj) == "string"){
        console.log(obj.substring(0, 2))
        console.log("la longueur de la chaîne est de: " + obj.length) 
    }else
    console.log(obj[0] + " " + obj[1])
    console.log("la taille du tableau est de: " + obj.length) 
}

typeUnion([0,1,2,3])
typeUnion("hello")