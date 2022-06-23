// OBJETOS


const usuario = {
    nombre: "Conrado Lanusse",
    edad: 34,
    rol: "Profesor",
    curso: "Javascript",
    empresa: "Coderhouse",
    activo: true,
    direccion: {
        calle: 'calle falsa',
        num: 123,
        barrio: null
    }
}

// console.log(usuario.direccion.calle)
// console.log(usuario.direccion.barrio)


// let obj1 = {
//     nombre: "Jorge"
// }

// let obj2 = {
//     nombre: "Jorge"
// }

// console.log(obj1 == obj2) // FALSE!


const usuario2 = {
    nombre: "Luis Salinas",
    edad: 26,
    rol: "Tutor",
    curso: "Javascript",
    empresa: "Coderhouse"
}

// const usuario3 = {...usuario2}

// usuario3.nombre = "John Doe"
// console.log(usuario.nombre)

// usuario.nombre = "Luis Salinas"
// usuario.edad += 1

console.log(usuario2)
// console.log(usuario3)

// console.log( usuario["email"] )

// usuario["email"] = "abc@abc.com"

// let propiedad = prompt("Qué propiedad acceder?") // "email"

// usuario.propiedad = "abc@abc.com"

// usuario[propiedad] = "abc@abc.com"


// console.log(usuario)



// delete usuario.email

// -- CONSTRUCTORES --


// function Mascota(nombre, edad, tipo) {
//     this.nombre = nombre
//     this.edad = edad
//     this.tipo = tipo

//     this.saludar = () => {
//         console.log(this.nombre + " te saluda!")
//     }

//     this.cumplirAnios = () => {
//         this.edad += 1
//     }
// }

// const mascota1 = new Mascota("Ronnie", 6, "perro")
// const mascota2 = new Mascota("Lucas", 3, "gato")
// const mascota3 = new Mascota("Dory", 1, "pez")


// mascota1.saludar()
// console.log(mascota1)

// mascota1.cumplirAnios()

// console.log(mascota1)


// console.log(mascota2)
// console.log(mascota3)

//  EJEMPLO APLICADO
// function crearMascota() {
//     let nombre = prompt('Ingrese nombre de la mascota')
//     let edad = Number( prompt('Ingrese la edad de la mascota'))
//     let tipo = prompt('Ingrese tipo de la mascota')

//     const mascota = new Mascota(nombre, edad, tipo)
//     return mascota
// }

// const mascota1 = crearMascota()
// const mascota2 = crearMascota()

// console.log(mascota1)
// console.log(mascota2)


// CLASES

class Mascota {

    constructor(nombre, edad, tipo) {
        this.nombre = nombre
        this.edad = edad
        this.tipo = tipo
    }

    saludar() {
        alert(this.nombre + " te está saludando!")
    }

    cumplirAnios() {
        this.edad += 1
    }
}


const mascota1 = new Mascota("Ronnie", 6, "perro")


// console.log(mascota1)
