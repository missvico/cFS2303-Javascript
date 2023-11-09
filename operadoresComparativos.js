let a = 3 
let b = 4

//MAYOR
console.log(a > b) //false
console.log(b > a) //true

//MENOR
console.log(a < b) // true
console.log(b < a) // false

//MAYOR O IGUAL
console.log(a >= b)//false
console.log(a >= 3) //verdadero

//MENOR O IGUAL
console.log(a <= b)//true
console.log(a <= 3) //true

//IGUALDAD ABSTRACTA

console.log( 2 == "2") //TRUE
console.log( 2 == 2) //TRUE

//IGUALDAD ESTRICTA
console.log( 2 === "2") //FALSE
console.log( 2 === 2) //TRUE

//DESIGUALDAD ABSTRACTA
console.log( 2 != "2") //FALSE
console.log( 2 != 3) //TRUE
console.log( 2 != "3") //TRUE

//DESIGUALDAD ESTRICTA
console.log( 2 !== "2") //TRUE
console.log( 2 !== 2) //FALSE