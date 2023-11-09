alert("Hola mundo")
const firstName = "Victoria" //string
let age = 27 // number
let viveEnAmerica = true //boolean
let lastName //undefined

console.log(firstName)
console.log(age)
console.log(viveEnAmerica)
console.log(firstName, age, viveEnAmerica)

console.log("Antes de asignar valor:", lastName)
lastName = "Di Liscia"
console.log("Despues de asignar valor", lastName)

// firstName = "Maria" --> no puedo reasingar valor a una const
// VM212:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:11