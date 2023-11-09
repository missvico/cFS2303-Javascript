const persona = {
    nombre: "Victoria",
    edad: 27,
    sabeProgramar: true,
    coloresFavoritos: ["celeste", "verde"]
}

const persona2 = {
    nombre: "Juan",
    edad: 30,
    sabeProgramar: true,
    coloresFavoritos: ["rojo", "verde"]
}

persona.nombre //Devuelve Victoria
persona["nombre"] //Devuelve Victoria

persona.coloresFavoritos[0] // los objetos complejos dentro de mi objeto se comportan igual que cuando los guardamos en una variable let
persona.coloresFavoritos.push("rosa")

//modificar props
persona["edad"] = 28
persona.sabeProgramar = false

//agregar props
persona.pais = "Argentina"
persona["ciudad"] = "Buenos Aires"


//DIFERENCIA ENTRE DOT Y BRACKET - LOS BRACKETS ACEPTAN VARIABLES PARA PASAR LA PROPIEDAD
const propiedad = "nombre"

persona.propiedad //que devuelve? 
persona[propiedad] //devuelve "Victoria"

//SE PUEDEN HACER ARREGLOS DE OBJETOS PARA ORDENAR LA INFO

const listado = [
    {
        name: "Microondas",
        price: 100000
    },
    {
        name: "Heladera",
        price: 300000
    }
]

listado[0].name // traeme el nombre del primer elemento del arreglo listado -Microondas