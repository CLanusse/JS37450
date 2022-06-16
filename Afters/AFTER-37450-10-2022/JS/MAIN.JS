const BBDD = [
    {
        "id": 1,
        "nombre": "Nike Air Max 01",
        "img": "./assets/img/nike01.png",
        "precio": 20,
        "cantidad":1
    },
    {
        "id": 2,
        "nombre": "Nike Air Max 02",
        "img": "./assets/img/nike02.png",
        "precio": 30,
        "cantidad":1
    },
    {
        "id": 3,
        "nombre": "Nike Air Max 03",
        "img": "./assets/img/nike03.png",
        "precio": 40,
        "cantidad":1
    },
    {
        "id": 4,
        "nombre": "Nike Air Max 04",
        "img": "./assets/img/nike04.png",
        "precio": 50,
        "cantidad":1
    },
    {
        "id": 5,
        "nombre": "Nike Air Max 05",
        "img": "./assets/img/nike05.png",
        "precio": 60,
        "cantidad":1
    },
    {
        "id": 6,
        "nombre": "Nike Air Max 06",
        "img": "./assets/img/nike06.png",
        "precio": 70,
        "cantidad":1
    },
    {
        "id": 7,
        "nombre": "Nike Air Max 07",
        "img": "./assets/img/nike07.png",
        "precio": 80,
        "cantidad":1
    },
    {
        "id": 8,
        "nombre": "Nike Air Max 08",
        "img": "./assets/img/nike08.png",
        "precio": 90,
        "cantidad":1
    },
    {
        "id": 9,
        "nombre": "Nike Air Max 09",
        "img": "./assets/img/nike09.png",
        "precio": 100,
        "cantidad":1
    },
    {
        "id": 10,
        "nombre": "Nike Air Max 10",
        "img": "./assets/img/nike10.png",
        "precio": 110,
        "cantidad":1
    }
]

const carrito = [];

let total = 0;

function renderizarProductos(){

    let tienda = document.getElementById('tienda');

    let filtro = document.getElementById('filtro');
    filtro.innerHTML = `
    <button class="btn btn-warning mb-5" onclick="filtroPrecio()">Filtrar mayor 70</button>
    `
    
    BBDD.forEach((e)=>{
        
        let productoHTML = `

        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${e.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${e.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>${e.precio}€</p>
                <button class="btn btn-primary" onClick="agregarProductoAlCarrito(${e.id})">Añadir al carrito</button>
            </div>
        </div>
        </div>
        `
        tienda.innerHTML += productoHTML
    });

}

renderizarProductos();

function agregarProductoAlCarrito(id){

    let producto = BBDD.find(producto => producto.id == id);

    let productoEnCarrito = carrito.find(producto => producto.id == id);

    if(productoEnCarrito){
        
        productoEnCarrito.cantidad++;
       

    }else {
        
        producto.cantidad = 1;
        carrito.push(producto);
    

    }
    
    renderizarCarrito();
}

function renderizarCarrito(){

    let carritoHTML = document.getElementById('carrito');

    html = '';

    carrito.forEach((producto, id)=>{
        
        html += `
        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
            <div class="card text-dark" style="width: 18rem;">
                <img class="card-img-top" src="${producto.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p>${producto.precio}€</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <button class="btn btn-danger" onclick="eliminarProductoDelCarrito(${id})">Eliminar</button>
                </div>
            </div>
        </div>
        `
    })

    carritoHTML.innerHTML = html;

    calcularTotal();
}

function calcularTotal(){

    carrito.forEach((producto) => {
        
        total += producto.precio * producto.cantidad;
    });
    
    console.log(total);

}


const eliminarProductoDelCarrito = (id)=> {

    console.log(carrito[id].cantidad); //1
    carrito[id].cantidad--;
    console.log(carrito[id].cantidad); 

    if(carrito[id].cantidad == 0){
        
        carrito.splice(id, 1);
    }
    
    renderizarCarrito();
}


function filtroPrecio(){

    let bd = BBDD.filter(producto => producto.precio > 70);
    console.log(bd);

}
























































/* const arrayEdades = [];

function preguntar(){

    let edades = Number(prompt("cuantas edades ingresara ?: "));

    for(let i = 0; i < edades; i++){
        
        let edad = Number(prompt("ingrese edad: "))
        arrayEdades.push(edad);
    }
    console.log(arrayEdades);
    calcularPromedio(arrayEdades);
}

preguntar();

function calcularPromedio(arrayEdades){

    let suma = 0;

    arrayEdades.forEach(element => {
        suma += element;
    });

    let promedio = suma / arrayEdades.length;

    console.log("El promedio de las edades es: ", promedio);

} */