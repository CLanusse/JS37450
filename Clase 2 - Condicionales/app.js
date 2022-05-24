


// console.log(true)
// console.log(false)

// console.log(typeof true)

// console.log("Inicio del programa")


// let profesor = "Conrado Lanusse"

// let resultado = profesor == "Ezequiel"


// console.log(resultado)

// == operador de EQUIVALENCIA 

// if ( profesor == "Ezequiel" ) {
//     // bloque
//     console.log("La condición se cumple")
// } else {
//     // bloque ELSE
//     console.log("La condición NO se cumple")
// }

// console.log(profesor)


// let temperatura = Number(prompt("Ingrese la temperatura actual"))

// operadores de comparación < , >, <=, >=

// console.log(typeof temperatura)

// console.log(temperatura)

// if (temperatura >= 30) {
//     console.log("Uf, que calorcito!")
// } else if (temperatura >= 15) {
//     console.log("Clima templado")
// } else if (temperatura < 15) {
//     console.log("Uf, que frio!")
// } 




// console.log( "10" == 10 )
// console.log( "10" === 10 )


// if (password === 1234) {
    //     alert("Bienvenido administrador")
    // } else {
        //     alert("La contraseña no es correcta")
        // }
        
        // if (password != 1234) {
            //     alert("La contraseña no es correcta!")
            // } else {
                //     alert("Bienvenido")
                // }

// const usuario = prompt('Ingrese el usuario')
// const password = Number( prompt('Ingrese la contraseña') )
// const palabraMagica = prompt('Ingrese la PALABRA MAGICA ;)')        
// if (usuario == 'Conrado') {
//     // algo
//     if (password == 1234) {
//         alert("BIenvenido!")
//     } else {
//         alert("Password incorrecto")
//     }

// } else {
//     alert("El usuario no es correcto")
// }

// op lógico AND

// if (usuario == "Conrado" && password == 1234) {
//     alert("Bienvenido")
// } else {
//     alert("Datos incorrectos")
// }

// op lógico OR

// if (password == 1234 || palabraMagica == 'Coder') {
//     alert("Bienvenido")
// } else {
//     alert("Datos incorrectos")
// }

// AND + OR

// if ( usuario == "Conrado" || password == 1234 || palabraMagica == "Coder" ) {

// if ( usuario === "Conrado" && (password === 1234 || palabraMagica === "Coder") ) {
//     alert("Bienvenido!")
// } else {
//     alert("Datos inválidos")
// }

// console.log("Fin del programa")



// EJ. CON GATITOS

const cajaMisteriosa = prompt("Caja misteriosa")

if (cajaMisteriosa === "gatito") {
    
    let statusGatito = prompt("Estado del gatito?")

    if (statusGatito == "gordito") {
        alert("Soy feliz")
    } else if (statusGatito == "dormido") {
        alert("Hago café")
    }

} else {
    alert("No estoy feliz")
}