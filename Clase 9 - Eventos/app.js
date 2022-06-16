

const btn1 = document.querySelector('#boton1')
const btn2 = document.querySelector('#boton2')
const btn3 = document.querySelector('#boton3')


const clickear = () => {
    console.log("Botón clickeado")
}

const alertar = () => {
    alert("Botón clikeado!")
}

// btn1.addEventListener('click', clickear)

btn1.addEventListener('click', (event) => {
    console.log(event.target)
    // console.log("Botón clickeado")
})

btn1.addEventListener('mouseover', (event) => {
    console.log(event)
})

btn2.onclick = clickear

// btn2.onclick = () => {
//     console.log("Botón 2 clickeado")
// }
btn2.onmouseover = () => {
    console.log("Hover en boton 2")
}


const div = document.createElement('div')
div.innerHTML = `
                    <h3 onclick="alertar()">Hola mundo!</h3>
                `
document.body.append(div)

// EJEMPLO DIVERTIDO

const randomColor = () => {
    return Math.round( Math.random() * 255 )
}

const titulo = document.querySelector('#titulo')

titulo.addEventListener('mouseover', () => {
    const red = randomColor()
    const green = randomColor()
    const blue = randomColor()
    // console.log(`rgb(${red}, ${green}, ${blue})`)
    titulo.style.color = `rgb(${red}, ${green}, ${blue})`
})


// window.addEventListener('click', () => {
//     const red = randomColor()
//     const green = randomColor()
//     const blue = randomColor()
//     // console.log(`rgb(${red}, ${green}, ${blue})`)
//     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
// })

/// EJEMPLO FORM

const formulario = document.querySelector('#my-form')
const inputNombre = document.querySelector('#input-nombre')
const inputDireccion = document.querySelector('#input-direccion')
const btnEnviar = document.querySelector('#btn-enviar')


// btnEnviar.addEventListener('click', () => {
//     console.log(inputNombre.value)
//     console.log(inputDireccion.value)
// })

// window.addEventListener('keydown', (e) => {
//     if (e.key === "Tab") {
//         e.preventDefault()
//     }
// })

inputNombre.addEventListener('keydown', (event) => {

    // if (event.key === "o") {
    //     event.preventDefault()
    // }
   
    if (inputNombre.value.length <= 4) {
        inputNombre.classList.add('border-danger')
        inputNombre.classList.remove('border-success')
    } else {
        inputNombre.classList.add('border-success')
        inputNombre.classList.remove('border-danger')
    }
})

inputDireccion.addEventListener('input', () => {
    // console.log(inputDireccion.value)

    if (inputDireccion.value.length <= 8) {
        inputDireccion.classList.add('border-danger')
        inputDireccion.classList.remove('border-success')
    } else {
        inputDireccion.classList.add('border-success')
        inputDireccion.classList.remove('border-danger')
    }
})
// inputNombre.addEventListener('change', () => {
//     console.log(inputNombre.value)

//     if (inputNombre.value.length <= 4) {
//         inputNombre.classList.add('border-danger')
//         inputNombre.classList.remove('border-success')
//     } else {
//         inputNombre.classList.add('border-success')
//         inputNombre.classList.remove('border-danger')
//     }
// })

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    // console.log(e.target[0])
    // console.log("submit del form")
    
    const userData = {
        nombre: inputNombre.value,
        direccion: inputDireccion.value,
        password: inputPassword.value
    }

    console.log(userData)
})

// ------------

const inputPassword = document.querySelector('#input-pass')
const btnPass = document.querySelector('#btn-pass')

btnPass.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputPassword.type === "password") {
        inputPassword.type = "text"
    } else {
        inputPassword.type = "password"
    }
})


// MODAL

const modalContainer = document.querySelector('#modal-container')
const openModal = document.querySelector('#open-modal')
const closeModal = document.querySelector('#close-modal')

openModal.addEventListener('click', () => {
    modalContainer.classList.add('modal-container--visible')
})

closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('modal-container--visible')
})