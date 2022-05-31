// FUNCIONES


// declaración
// function holaMundo() {
//     alert("Hola mundo!")
// }

// function saludar() {
//     let nombre = prompt('Ingrese su nombre:')
//     alert("Bienvenido " + nombre + " a la clase de JS!")

//     holaMundo()
// }

// llamados

// holaMundo()

// saludar()

// holaMundo()

// function saludarUsuario(usuario) {
//     console.log("Bienvenido " + usuario)
// }


// saludarUsuario("Luis")
// saludarUsuario("Carlos")
// saludarUsuario("Victoria")





// function infoUsuario(nombre, edad, curso) {
//     console.log("Nombre: " + nombre)
//     console.log("Edad: " + edad + " años")
//     console.log("Cursando: " + curso)
// }

function infoUsuario() {
    
    let nombre = prompt('Ingrese su nombre')
    let edad = Number( prompt('Ingrese su edad:') )
    let curso = prompt('Ingrese su curso')
    
    console.log("Nombre: " + nombre)
    console.log("Edad: " + edad + " años")
    console.log("Cursando: " + curso)

    evaluarEdad(edad)
}

// infoUsuario()

// infoUsuario("Conrado", 19, "Javascript")

// infoUsuario("Jorge", 23, "ReactJS")


function evaluarEdad(edad) {
    if (edad < 18) {
        alert("Usted no puede comprar cerveza!")
    } else {
        alert("Bienvenido, qué le sirvo?")
    }
}


// let edad = Number( prompt('Ingrese su edad:') )

// evaluarEdad(edad)


// RETURN



// function sumar(num1, num2) {
//     let suma = num1 + num2
//     return suma
// }

// function sumar(num1, num2) {
//     return num1 + num2
// }

// const sumar = function (num1, num2) {
//     return num1 + num2
// }

// const sumar = (num1, num2) => {
//     return num1 + num2
// }

// arrow function =>        return implicito
// const sumar = (num1, num2) => {return num1 + num2}
const sumar = (num1, num2) => num1 + num2

function restar(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}




let resultado = sumar(100, 200)
resultado = restar(resultado, 150)
resultado = multiplicar(resultado, 4)



// console.log(resultado)

// console.log( prompt("Ingresá un string") )

// sumar(11, 8)








// -- SCOPE --

let nombre = 'Carlos'

function saludar() {
    let nombre = 'Jonathan'
    console.log( nombre )

    saludarDeNuevo(nombre)
}

// console.log(nombre)

function saludarDeNuevo(saludo) {
    console.log(saludo)
}


// saludar() 




