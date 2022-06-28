
//operador ternario

let temperatura = 41

// if (temperatura >= 32) {
//     alert("Uf! Qué calor que hace")
// } else {
//     alert("Frío templado")
// }

// sintaxis Op. Ternario
// condicion ? caso1 : caso2

// temperatura >= 32 ? alert("Que calor que hace!") : alert("Frío/templado")

const usuario = {
    nombre: "John Doe",
    edad: 22
}


// let mensaje
// if (usuario.edad >= 18) {
//     mensaje = "Puede comprar"
// } else {
//     mensaje = "No puede comprar"
// }

const mensaje = usuario.edad >= 18 ? "Puede comprar" : "no puede comprar"

// alert(mensaje)

// op. lógico AND

// usuario.edad < 18 && alert("El usuario es menor de edad")
const invalido = usuario.edad < 18 && "El usuario es menor de edad"
// console.log(invalido)

const registroIngreso = usuario.edad >= 18 && new Date()
// console.log(registroIngreso)

// valores FALSY
// 0
// null
// undefined
// ''
// NaN
// false

// const mensaje2 = "" || "No hay ingreso"

// console.log(mensaje2)


// const usuario2 = null
const usuario2 = {
    nombre: "John Doe",
    edad: 33,
    direccion: "Callee falsa 123",
    cursos: {
        javascript: "aprobado",
        desarrolloweb: "aprobado",
        angular: "en curso"
    },
    trabajo: null,
}


// console.log( usuario2?.nombre )
// console.log( usuario2?.cursos?.react || "El usuario no cursó ésto")
// console.log( usuario2?.cursos?.javascript || "El usuario no cursó ésto")

// const nombre = usuario2.nombre
// const edad = usuario2.edad
// const direccion = usuario2.direccion

// sintaxis: { prop1, prop2, ... } = objeto
// const { nombre, edad, cursos: {angular } = usuario2
const { nombre, edad, cursos: {angular: ang} } = usuario2

// console.log(nombre, edad, ang)
 
// alias

const pelicula = {
    id_pelicula: 13332,
    movie_full_name: 'Iron man 12',
    director_full_name: 'John Doe',
    year_of_production: 2019,
    poster_front_image: 'http//algo.com'
}

// const { id_pelicula: id, movie_full_name: movie, director_full_name: director} = pelicula
// console.log(id, movie, director)

const mostrarDataPelicula = ( {movie_full_name, director_full_name, year_of_production} ) => {
    // const {movie_full_name, director_full_name, year_of_production} = peli

    console.log('Nombre: ' + movie_full_name)
    console.log('Director: ' + director_full_name)
    console.log('Año de producción: ' + year_of_production)
}

// mostrarDataPelicula(pelicula)

// window.addEventListener('click', ( {x, y} ) => {
//     // const {x, y} = e
//     console.log("X: " + x)
//     console.log("Y: " + y)
// })

// desestructuracion de arrays

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

const [, , a, b] = nombres

// console.log(a, b)

// spread-arrays

// console.log("Juan", "Julieta", "Carlos", "Mariela")
// console.log(...nombres)

const numeros = [1, 5, 1356, 3, 992, 242, 9942, 45]
// console.log( Math.max(...numeros) )

const temperaturaDomingo = [2, 6, 12, 9]
const temperaturaLunes = [3, 6, 16, 4]

// const temperaturas = temperaturaDomingo.concat(temperaturaLunes)
const temperaturas = [...temperaturaDomingo, ...temperaturaLunes]

// console.log( Math.max(...temperaturas) )
// console.log( Math.min(...temperaturaDomingo, ...temperaturaLunes) )


const pelicula2 = {
    ...pelicula,
    year_of_production: 1998
}

// console.log(pelicula)
// console.log(pelicula2)


// rest parameters

// const sumar = (...numeros) => {
//     return numeros.reduce((acc, num) => acc + num, 0)
// }
const sumar = (...numeros) => {
    let acc = 0
    numeros.forEach((num) => {
        acc += num
    })

    return acc
}

const maximo = (...numeros) => {
    let max = -Infinity
    numeros.forEach((num) => {
        if (num >= max) {
            max = num
        }
    })

    return max
}

console.log( sumar(1, 5, 3, 23, 43) )
console.log( maximo(1, 5, 3, 23, 43) )