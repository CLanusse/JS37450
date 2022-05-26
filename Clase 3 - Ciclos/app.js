// CICLOS e ITERACIONES

// i = i + 1 ===>> i++

//         0                1              3
// for (let contador = 1; contador <= 3; contador++) {
//     // 2 - bloque de código a ejecutar

//     console.log(contador)

// }


// const numeroIngresado = Number( prompt('Ingrese un número') )

// for (let i = 1; i <= 10; i++) {
//     // 2 - bloque de código a ejecutar

//     console.log(i * numeroIngresado)

// }

// FIBONACCI
// let numero1 = 0;
// let numero2 = 1;
// let numero3 = 0;

// console.log(numero2)


// for (let i = 0; i < 10; i++) {
//     numero3 = numero1 + numero2;
//     console.log(numero3);
//     numero1 = numero2;
//     numero2 = numero3;
// }

// for (let numero3 = 1; numero3 <= 89; numero3 = numero1 + numero2) {  
//     console.log(numero3);
//     numero1 = numero2;
//     numero2 = numero3;
// }



// BREAK - CONTINUE

// for (let i = 0; i < 10; i++) {
    
//     if (i === 4) {
//         // console.log(i + "NUMERO PROHIBIDO!!!")
//         break
//     }
    
//     console.log(i)
// }

// for (let i = 0; i <= 50; i++) {
    
//     if (!(i % 5 === 0)) {
//         continue
//     }
    
//     console.log(i)
// }



// WHILE

// let contador = 0

// while (contador <= 100) {

//     console.log(contador)

//     contador += 10
// }


// let usuario = prompt("Ingrese el usuario/admin")

// while (usuario !== 'Conrado') {
//     alert('Usuario incorrecto!')
//     usuario = prompt('Ingrese el usuario/admin')
// }

// while (true) {
    // if (usuario === 'Conrado') {
    //     break
    // }

    // alert('Usuario incorrecto!')
    // usuario = prompt('Ingrese el usuario/admin')
// }

// for ( ; true ; ) {
//     if (usuario === 'Conrado') {
//         break
//     }

//     alert('Usuario incorrecto!')
//     usuario = prompt('Ingrese el usuario/admin')
// }

// let password

// do {

//     password = Number(prompt('Ingrese la contraseña'))

// } while (password !== 1234)

// alert("Bienvenido usuario ADMIN! =)")



// SWITCH

// const mascota = prompt("Ingrese su mascota")

// switch (mascota) {
//     case "gato": 
//         alert("Me encantan los gatos!!")
//         break
//     case "perro": 
//         alert("Me gustan los perros, pero no tanto")
//         break
//     case "pez":
//         alert("Me aburren los peces")
//         break
//     case "chancho":
//         alert("Ugh! Que asco")
//         break
//     case "rata":
//         alert("Cómo podés tener una rata?!")
//         break
//     default:
//         alert("NO ingresaste una mascota válida")
// }


// if (mascota == "gato") {
//     alert("Me encantan los gatos!!")
// } else if (mascota == "perro") {
//     alert("Me gustan los perros, pero no tanto")
// } else if (mascota == "pez") {
//     alert("Me aburren los peces")
// } else if (mascota == "chancho") {
//     alert("Ught! Que asco")
// } else if (mascota == "rata") {
//     alert("Cómo podés tener una rata?!")
// }


// EJEMPLO PRACTIO - SWITCH


// const texto = "hoLa MunDo"

// console.log(texto.toUpperCase() )

// console.log(texto.toLowerCase() )

// const banco = prompt('Ingrese su banco').toLowerCase()
// const monto = Number( prompt('Ingrese el monto de su préstamo') )

// let interes

switch ( banco ) {
    case "santander":
        interes = 1.12
        break
    case "macro":
        interes = 1.25
        break
    case "nacion":
        interes = 1.90
        break
    case "galicia":
        interes = 2.40
        break
    default:
        alert("No ingresaste un banco válido")
}

alert("Tu monto a devolver al banco "+ banco + " es de " + monto * interes)
