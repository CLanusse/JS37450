

// HOF 

// function mayorQue(n) {

//     return (m) => {
//         return m > n
//     }
// }

// const mayorQueDiez = mayorQue(10)
// // const mayorQueDiez = (m) => {
// //         return m > 10
// //     }

// const mayorQueVeinte = mayorQue(20)
// // const mayorQueVeinte = (m) => {
// //     return m > 20
// // }


// console.log( mayorQueDiez(12) )
// console.log( mayorQueVeinte(15) )


// RECIBIR FUNCIONES POR PARAMETRO


const numeros = [1, 23, 44, 65, 92, 32, 87, 123]
const nombres = ["Jorge", "Carlos", "Luis"]



const porCadaUno = (array, fn) => {
    for (const element of array) {
        fn(element)
    }
}

// porCadaUno(nombres, alert)
// porCadaUno(nombres, console.log)

const duplicar = (num) => {
    console.log(num * 2)
}

// porCadaUno(numeros, duplicar )

let total = 0

const acumular = (num) => {
    total += num
}

// porCadaUno(numeros, acumular)
// console.log(total)


// porCadaUno(numeros, (num) => {
//     console.log(num * 3)
// })

// const duplicados = []

// porCadaUno(numeros, (num) => {
//     duplicados.push(num * 2)
// })

// console.log(duplicados)






// recorrer arrays
// forEach


// numeros.forEach( (el) => {
//     console.log("Elemento del array: " + el)
// } )

// nombres.forEach( (nombre) => {
//     console.log("Nombre: " + nombre)
// } )

// numeros.forEach(duplicar)

// numeros.forEach( (num) => {
//     console.log(num * 2)
// } )


class Mascota {
    constructor(nombre, tipo, edad) {
        this.nombre = nombre
        this.tipo = tipo
        this.edad = edad
    }

    cumplirAnios() {
        this.edad += 1
    }
}


const mascotas = []

mascotas.push( new Mascota('Flufy', 'perro', 6) )
mascotas.push( new Mascota('Dory', 'pez', 3) )
mascotas.push( new Mascota('Jorge', 'gato', 14) )
mascotas.push( new Mascota('Ricardo', 'gato', 11) )

// recorrer arrays -- (ejecutar metodo)

// for (const mascota of mascotas) {
//     mascota.cumplirAnios()
// }

mascotas.forEach( (masc) => {
    masc.cumplirAnios()
} )

// console.log(mascotas)

// FIND

// const resultado = mascotas.find( (mascota) => {
//     return mascota.nombre === "Jorge"
// } )

//                                          (return)
// const resultado = mascotas.find( (mascota) => mascota.nombre === "Jorge" )
// const resultado = mascotas.find( (mascota) => mascota.tipo === "gato" )

const exist = mascotas.some( (mascota) => mascota.nombre === "Julieta" )
// console.log(resultado)
// console.log(exist)


// filter - map - reduce - find

const gatos = mascotas.filter( (el) => {
    return (el.tipo === "gato" && el.edad > 13)
} )

// console.log(gatos)


const arrayProductos = [
    {nombre: "Remera", precio: 1000},
    {nombre: "Remera", precio: 2000},
    {nombre: "Pantalon", precio: 1500},
    {nombre: "Pantalon", precio: 1700},
    {nombre: "Pantalon", precio: 5000},
    {nombre: "Pantalon", precio: 3000},
    {nombre: "Calzado", precio: 7000},
    {nombre: "Calzado", precio: 8000},
    {nombre: "Calzado", precio: 13000},
    {nombre: "Buzo", precio: 6000},
    {nombre: "Buzo", precio: 19000},
    {nombre: "Buzo", precio: 800},
]


// filter
const baratos = arrayProductos.filter( (prod) => prod.precio <= 5000)
// const baratos = arrayProductos.filter( (prod) => {
//     return prod.precio <= 5000
// })
// console.log( baratos )

const prodFiltrados = arrayProductos.filter( (prod) => prod.nombre !== "Pantalon" )
// console.log( prodFiltrados )

// map

const nombresProd = arrayProductos.map( (prod) => {
    return prod.nombre
} )

const precios = arrayProductos.map( (prod) => prod.precio )

// console.log( nombresProd )
// console.log( precios )

const stockNuevo = arrayProductos.map( (prod) => {
    return {
        nombre: prod.nombre,
        precio: prod.precio,
        stock: 100
    }
} )


// console.log(stockNuevo)

// const miMap = (array, fn) => {
//     const newArray = []

//     for (const el of array) {
//         newArray.push( fn(el) )
//     }

//     return newArray
// }

// const stockNuevo2 = miMap(arrayProductos, (prod) => {
//     return {
//         nombre: prod.nombre,
//         precio: prod.precio,
//         stock: 100
//     }
// })

// console.log(stockNuevo2)

// reduce

// sort


// MATH

const valores = [55, 3, 4, -1, Infinity, 8]
// console.log( Math.PI )
// console.log( Math.max(55, 3, 4, Infinity, 200, 8) )
// console.log( Math.min(55, 3, 4, -1, 200, 8) )

// const miMax = (array) => {
//     let resultado = -Infinity

//     for (const num of array) {
//         if (num >= resultado) {
//             resultado = num
//         }
//     }

//     return resultado
// }

// console.log( miMax(valores) )
// console.log( miMax(numeros) )

// console.log( Math.ceil(0.00000001) )
// console.log( Math.floor(0.00000001) )
// console.log( Math.round(-0.8) )


// console.log( Math.random() )
// console.log( Math.random() * 10)


// console.log( Math.random() * 50 + 50)

// console.log( Math.ceil( Math.random() * 6 ) )



// DATE


const hoy = new Date()

// console.log( hoy )

const navidad = new Date("December 25, 2022 0:0:0")

// console.log(navidad)
// console.log(navidad.getFullYear())
// console.log(navidad.getMonth())
// console.log(navidad.getDay())

// console.log(hoy)
// console.log(hoy.toLocaleDateString())
// const milisegsPorDia = 86400000
// console.log((navidad - hoy) / milisegsPorDia)


const inicio = new Date()

for (let i = 0; i < 5000; i++) {
    console.log("Iterando")
}

const final = new Date()

console.log("El proceso tardó " + (final - inicio) + " milisegundos")