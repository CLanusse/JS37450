// setTimeout


// console.log("Inicio del programa")

// setTimeout(() => {
//     console.log("Mitad del proceso")
// }, 0)


// console.log("Fin del programa")

// let cont1 = 1000
// let cont2 = 1000

// for (const letra of "hola") {
//     setTimeout(() => {
//         console.log(letra)
//     }, cont1)
//     cont1 += 1000
// }

// for (const letra of "mundo") {
//     setTimeout(() => {
//         console.log(letra)
//     }, cont2)
//     cont2 += 700
// }

// const btn = document.querySelector('#btn')
// btn.addEventListener('click', () => {

//     setTimeout(() => {
//         console.log("HOLA MUNDO")
//     }, 1500)
    
// })



// setInterval(()=> {
//     console.log("Tic")
// }, 1000)

const counterDOM = document.querySelector('#counter')

// let counter = 10

// const intervalo = setInterval(() => {
//     counter--
//     counterDOM.innerText = counter

//     if (counter === 0) {
//         clearInterval(intervalo)
//         counterDOM.innerText =  "BOoM!"
//     }
// }, 500)



// const titleTimeout = setTimeout(() => {
//     document.querySelector('#title').remove()
// }, 5000)

// document.querySelector('#title').addEventListener('click', () => {
//     document.querySelector('#title').remove()
//     clearTimeout(titleTimeout)
// })

// PROMESAS
// PROMESAS
// PROMESAS


const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (res === true) {
                resolve("Promesa resuelta")
            } else {
                reject("Promesa rechazada")
            }
        }, 2000)
    } )
}

// eventoFuturo(true)
//     .then( (resp) => {
//         console.log(resp)
//     })
//     .catch( (error) => {
//         console.log(error)
//     } )
//     .finally(() => {
//         console.log("Fin del proceso")
// })



const DBtutores = [
    {id: 1, nombre: 'Francisco', exp: "3 meses"},
    {id: 2, nombre: 'Marco', exp: "15 meses"},
    {id: 3, nombre: 'Enzo', exp: "3 meses"},
    {id: 4, nombre: 'Luis', exp: "9 meses"},
    {id: 5, nombre: 'Patricia', exp: "1 meses"},
]


const consultarTutor = (tutor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const match = DBtutores.find((el) => el.nombre === tutor)

            match ? resolve(match) : reject("No se encontraron resultados")
        }, 3000)
    })
}




const btnBuscar = document.querySelector('#btn-busqueda')
const inputBusqueda = document.querySelector('#tutor-busqueda')
const containerResultado = document.querySelector('#container-resultado')

btnBuscar.addEventListener('click', () => {
    const value = inputBusqueda.value
    containerResultado.innerHTML = `<h3>Buscando....</h3>`

    consultarTutor(value)
        .then( (resp) => {
            console.log(resp)

            containerResultado.innerHTML = `
                <h3>Tutor: ${resp.nombre}</h3>
                <p>Experiencia: ${resp.exp}</p>
                <small>Id n°: ${resp.id}</small>
            `
        } )
        .catch( (err) => {
            console.log(err)

            containerResultado.innerHTML = `
                <h3>${err}</h3>
            `
        })
})