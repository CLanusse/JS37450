
const usuarioLS = localStorage.getItem('user')

const title = document.querySelector('#titulo-user')

title.innerText = `Bienvenido ${usuarioLS}`


const productoJSON = localStorage.getItem('producto')
const producto = JSON.parse( productoJSON )

console.log(productoJSON)
console.log(producto)

document.querySelector('#producto-card').innerHTML = `
                                            <h4>${producto.nombre}</h4>
                                            <h6>Precio: $${producto.precio}</h6>
`

// mascotas

const mascotas = JSON.parse( localStorage.getItem('mascotas') )
console.log(mascotas)