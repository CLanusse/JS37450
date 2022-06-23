// ARRAY

// i                0          1         2            3
// const tutores = ["Patricia", "Francisco", "Juanma", "Marco", "Enzo", "Luis"]

// const numeros = [4, 6, 2, 19, 11, 34]

// tutores.push("Exequiel")
// console.log(tutores)
// console.log(numeros)


// console.log( tutores[0] )
// console.log( tutores[1] )
// console.log( tutores[3] )
// console.log( tutores[4] )

// console.log( numeros[0] + numeros[3] + numeros[6] )

// console.log( tutores[0].length )
// console.log( tutores[1][1] )

// console.log( "Patricia"[0] )
// console.log(tutores)


// let query = "Marco"

// for (let i = 0; i < tutores.length; i++)  {

//     // console.log( tutores[i] )
//     if (tutores[i] === query) {
//         alert("Sí, existe el tutor " + query + " en el curso")
//         break
//     }

// }


const mascotas = ["Tomas", "jorgito"]

// push

mascotas.push("Dory")
mascotas.push("Luis")

// unshift

mascotas.unshift("Laurita")

// pop 

// mascotas.pop()

// shift

// mascotas.shift()


// SPLICE

const tutores = ["Patricia", "Francisco", "Juanma", "Marco", "Enzo"]
const profesores = ["Conrado", "Luis"]

// splice(indice, cant, N+)
// tutores.splice(1, 0, "Lucrecia", "Paula")

// console.log( tutores.join("*") )
// console.log( tutores )

const equipo =  tutores.concat(profesores)
// slice => strings
// console.log( equipo.slice(1, 4) )
// console.log( equipo.slice(3) )


// console.log( equipo[1].slice(2) )
// console.log( equipo.indexOf("asdfasdfs") )
// console.log( equipo.includes('Luisito') )

// EJEMPLO APLICADO

const eliminarPersonal = (nombre) => {

    const indice = equipo.indexOf(nombre)

    if (indice !== -1) {
        equipo.splice(indice, 1)
    }
}

const eliminarElemento = (array, elemento) => {

    const indice = array.indexOf(elemento)

    if (indice !== -1) {
        array.splice(indice, 1)
    }
}

const numeros = [4, 6, 2, 19, 11, 34]

// eliminarPersonal("Francisco")
// eliminarPersonal("Luis")
// eliminarPersonal("Jorge")

// console.log(equipo)

// eliminarElemento(numeros, 19)

// console.log(numeros)


// array productos

// const producto1 = {
//     nombre: 'Remera Rosa',
//     id: 1,
//     precio: 1500
// }

// const producto2 = {
//     nombre: 'Zapatillas negras',
//     id: 2,
//     precio: 10500
// }

// const producto3 = {
//     nombre: 'Zapatillas azules',
//     id: 3,
//     precio: 14000
// }

// const productos = [producto1, producto2, producto3]

class Producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

// const productos = [
//     {id: 1, nombre: 'Remera roja', precio: 1500},
//     {id: 2, nombre: 'Zapatillas negras', precio: 10500},
//     {id: 3, nombre: 'Zapatillas azules', precio: 14000}
// ]

const productos = [
    new Producto(1, 'Remera roja', 1500),
    new Producto(2, 'Zapatillas negras', 10500),
    new Producto(3, 'Zapatillas azules', 12500),
    new Producto(4, 'Zapatillas marrones', 20500),
    new Producto(5, 'Zapatillas verdes', 30500),
]

function agregarProducto() {
    let id = Number( prompt('Ingrese ID del producto') )
    let nombre = prompt('Ingrese nombre del producto')
    let precio = Number( prompt('Ingrese precio del producto') )

    productos.push( new Producto(id, nombre, precio) )
    // productos.push( {id: id, nombre: nombre, precio: precio} )
}

// console.log(productos)

// agregarProducto()

// console.log(productos[1].precio)
console.log(productos)

// for (let i = 0; i < productos.length; i++) {
//     console.log( productos[i].nombre )
// }

// for (const producto of productos) {
//     console.log(producto.nombre)
// }



class Mascota {

    constructor(nombre, edad, tipo) {
        this.nombre = nombre
        this.edad = edad
        this.tipo = tipo
    }

    saludar() {
        alert(this.nombre + " te está saludando!")
    }

    cumplirAnios() {
        this.edad += 1
    }
}

const mascotas2 = [
    new Mascota('Ronnie', 6, 'perro'),
    new Mascota('Dory', 1, 'pez'),
    new Mascota('Mica', 8, 'gato'),
]

console.log(mascotas2)

for (const mascota of mascotas2) {
    mascota.saludar()
}


// matriz

const matriz = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7 ,8, 9]
]