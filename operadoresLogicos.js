const zero = 0
let undef = undefined
const empty = ""
const nullValue = null
const name = "Juan"
const age = 25

//OR

age || zero || empty

//1. Boolean(age) -- devuelve true
//2. Retorna 25

zero || empty || age

//1. Boolean(zero) -- devuelve false
//2. Pasa al siguiente valor
//3. Boolean(empty) -- devuelve false
//4. Pasa al siguiente valor 
//5. Boolean(age) -- devuelve true
//6. Devolviendo 25

zero || name || age

//1. Boolean(zero) -- devuelve false
//2. Pasa al siguiente valor
//3. Boolean(name) --devuelve true
//4. Toda la expresion retorna "Juan"

nullValue || empty || zero

//1. Boolean(nullValue) -- devuelve false
//2. Pasa al siguiente valor
//3. Boolean(empty) -- devuelve false
//4. Pasa al siguiente valor 
//5. Boolean(zero) -- devuelve false
//6. no hay mas valores a la derecha toda la expresion retorna 0

//AND
age && zero && empty

//1. Boolean(age) -- devuelve true
//2. Pasa al siguiente termina
//3. Boolean(zero) -- devuelve false
//4. Retorna 0

age && name && "12345"

//1. Boolean(age) -- devuelve true
//2. Pasa al siguiente termino
//3. Boolean(name) --devuelve true
//4. Pasa al siguiente termino
//5. Boolean("12345") -- devuelve true
//6. no hay mas valores a la derecha toda la expresion retorna "12345"

//NOT !
!age

//Boolean(age)-- es true
// devuelve false


!zero
//Boolean(zero) -- es false
//devuelve true

!!age //-- la doble negacion es lo mismo Boolean(age)

