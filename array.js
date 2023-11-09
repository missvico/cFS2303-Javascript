const alumnos = ["Jeremias", "Yariel", "Max", "Melisa", "Nicolas"]

// console.log(alumnos[0])
// console.log(alumnos[1])

alumnos.push("Gabriel") // suma un elemento al final
alumnos.pop() // saca el ultimo elemento
alumnos.shift() //saca un elemento principio
alumnos.unshift("Facundo") //agrega uno al principio

alumnos.length //devuelve el largo de un arreglo

alumnos[alumnos.length-1] //siempre me trae el ultimo elemento del arreglo

// console.log(alumnos[0])
// console.log(alumnos[1])
// console.log(alumnos[2])
// console.log(alumnos[3])
// console.log(alumnos[4])

alumnos.push("Gabriel") // suma un elemento al final

for(let i = 0; i<alumnos.length; i++){
    console.log(alumnos[i])
}
