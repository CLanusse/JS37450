// === DOM ===


// console.log( document)
// console.log( document.head )
// console.log( document.body )




// const listItems = document.getElementsByTagName('li') // evítenlo =( 
const listItems = document.getElementsByClassName('list-item')
                //  document.querySelectorAll('ul li.list-item')
// console.log(listItems)

// for (const elemento of listItems) {
//     console.log(elemento)
// }



const titulo = document.getElementById("titulo")
titulo.className = "green font-big"

// console.log(titulo.innerText)
// console.log(titulo.innerHTML)

const textElement = document.getElementById("texto")

// console.log( textElement.innerText )

// const usuario = prompt('Ingrese su nombre')
// textElement.innerText = "Bienvenido " + usuario +" a Coderhouse =)"

textElement.innerHTML = "Bienvenidos estudiantes a <strong>Coderhouse</strong> =)"
textElement.style.fontSize = "30px"

textElement.classList.add('blue', 'bold')
// console.log(textElement.classList)
textElement.classList.remove('blue')

const container = document.getElementById("contenedor")

container.innerHTML="<h3>Hola mundo!</h3><p>Este es un texto.</p><hr>"
// console.log(container)

//------------------------------
// crear elementos

const texto = document.createElement('p')
texto.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illum tenetur maiores odio numquam asperiores natus, dicta repudiandae.'
texto.className = "blue bold"
texto.id = "text2"

console.log(texto)

container.append(texto)
// container.prepend(texto)

// container.remove()

// console.log(container)

// document.body.append(container)
// document.body.append(texto)

// console.log( document.getElementById("nombre").value )


// -----------------

const tutores = ["Francisco", "Luis", "Marco", "Enzo", "Patricia", "Juanma", "Exequiel"]

const tutoresList = document.getElementById('tutores-list')


tutores.forEach((tutor) => {
    const li = document.createElement('li')
    li.innerText = tutor
    li.className = "red"

    tutoresList.append(li)
})


// ---------------------


const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 1500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 2500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 3500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 4500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 5,
        nombre: "Producto 5",
        precio: 5500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 6,
        nombre: "Producto 6",
        precio: 6500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 7,
        nombre: "Producto 7",
        precio: 7500,
        img: "https://via.placeholder.com/250"
    },
]


// template string
const producto = {
    id: 7,
    nombre: "Producto 7",
    precio: 7500,
    img: "https://via.placeholder.com/250"
}

// const mensaje = "ID producto: " + producto.id + ". Precio: $ " + producto.precio + "."
// const mensaje = `ID "producto": ${producto.id}. 'Precio': $ ${producto.precio}.`
// console.log(mensaje)


// const productsContainer = document.getElementById('products-container')
const productsContainer = document.querySelector('#products-container')

productos.forEach((producto) => {
    const div = document.createElement('div')

    // div.innerHTML = "<h4>" + producto.nombre + "</h4><p>Precio: $"+producto.precio+"</p>"
    div.innerHTML = `<h4>${producto.nombre}</h4>
                    <img src=${producto.img}/>
                    <p>Precio: $ ${producto.precio}</p>
                    <hr>
                    `
    
    productsContainer.append(div)
})




// const div = document.createElement('div')

// // div.innerHTML = "<h4>" + producto.nombre + "</h4><p>Precio: $"+producto.precio+"</p>"
// div.innerHTML = `<h4>${producto.nombre}</h4>
//                 <img src=${producto.img}/>
//                 <p>Precio: $ ${producto.precio}</p>
//                 <hr>
//                 `

// productsContainer.append(div)
// const h4 = document.createElement('h4')
// h4.innerText = producto.nombre
// div.append(h4)
// console.log(div)


