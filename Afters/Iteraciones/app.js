

// let triangulo = ""
// let limite = Number( prompt("Ingrese la altura del triangulo") )

// for (let i = 0; i < limite; i++) {
    
//     // triangulo = triangulo + "#"
//     triangulo += "#"

//     console.log(triangulo)
// }

// console.log( triangulo.length )

// for (let triangulo = "#"; triangulo.length <= 8; triangulo += "#") {
//     console.log(triangulo)
// }


// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }

// }


// for (let i = 0; i < 8; i++) {

//     if (i % 2 === 0) {
//         console.log("# # # # ")
//     } else {
//         console.log(" # # # #")
//     }
// }

// let size = 8
let size = Number( prompt("Ingrese el tamaño del tablero") )

for (let i = 0; i < size; i++) {

    let fila = ""

    if (i % 2 === 0) {
    
        for (let j = 0; j < size; j++) {
            if (j % 2 === 0) {
                fila += "#"
            } else {
                fila += " "
            }
        }

    } else {
    
        for (let j = 0; j < size; j++) {
            if (j % 2 === 0) {
                fila += " "
            } else {
                fila += "#"
            }
        }
    }

    console.log(fila)
}