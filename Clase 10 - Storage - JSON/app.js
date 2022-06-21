
let usuario
const usuarioLS = localStorage.getItem('user')


if (usuarioLS) {
    usuario = usuarioLS
} else {
    usuario = prompt("Ingrese su nombre")
    localStorage.setItem("user", usuario)
}

const title = document.querySelector("#titulo-usuario")
title.innerText = `Bienvenido: ${usuario}`


// localStorage.setItem("tutor", "Luis Salinas")

// sessionStorage.setItem("user", usuario)
// sessionStorage.setItem("tutor", "Luis Salinas")
// sessionStorage.setItem("coordinador", "Marco")
localStorage.setItem("tutor", "Luis Salinas")
// localStorage.setItem("coordinador", {nombre: "Marco", curso: "Javascript"})
// localStorage.setItem("user", "Otro usuario")

// const tutor = localStorage.getItem('tutorasdfasfd')
// console.log(tutor)

// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i)
    
//     console.log(clave, localStorage.getItem(clave) )
// }

// localStorage.removeItem('user')
// localStorage.clear()

const clearUser = () => {
    localStorage.removeItem('user')
    window.location.reload()
}

document.querySelector("#clear-user").addEventListener('click', clearUser)


// JSON


const producto = {
    id: 1,
    nombre: "Termo Stanley XRHT",
    precio: 18500,
    desc: "Un re  XRH termo"
}

console.log(producto)

const productoJSON = JSON.stringify(producto)

console.log(productoJSON)
console.log(typeof productoJSON)

localStorage.setItem('producto', productoJSON)

// JSON2

const mascotas = [
    {nombre: 'Flufy', tipo: 'gato'},
    {nombre: 'Dory', tipo: 'pez'},
    {nombre: 'Ronnie', tipo: 'perro'}
]

// const mascotasJSON = JSON.stringify(mascotas)
localStorage.setItem('mascotas', JSON.stringify(mascotas) )

