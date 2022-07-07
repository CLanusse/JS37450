

// query param "q" = String
// "limit" = Number

const url1 = 'https://www.coderhouse.com/search?q=luis&limit=20'

// URL (segment) params
const busqueda = 'pikachu'

const url2 = `https://pokeapi.co/api/v2/pokemon/${busqueda}`




// fetch
const url = `https://pokeapi.co/api/v2/pokemon/1`


// fetch('https://pokeapi.co/api/v2/pokemon/1')
//     .then( (resp) => {
//         return resp.json()
//     } )
//     .then( (data) => {
//         console.log(data)
//     } )

const listado = document.querySelector('#listado')

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((resp) => resp.json())
//     .then((data) => {

        // data.forEach((post) => {

        //     // const {title, body} = post
    
        //     listado.innerHTML += `
        //         <li>
        //             <h4>${post.title}</h4>
        //             <p>${post.body}</p>
        //             <hr>
        //         </li>
        //     `
        // })

//     } )
//     .catch((error) => {
//         console.log(error)
//     })


// fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers:  {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//         body: JSON.stringify({
//             title: 'Coderhouse',
//             body: 'Clase 15',
//             userId: 5,
//         })
//     })
//     .then((resp) => resp.json())
//     .then((data) => {
//         console.log(data)
//     })


// async - await

// async function pedirPosts() { ... }

const pedirPosts = async () => {

    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json()

    data.forEach((post) => {

        // const {title, body} = post

        listado.innerHTML += `
            <li>
                <h4>${post.title}</h4>
                <p>${post.body}</p>
                <hr>
            </li>
        `
    })

}
    
pedirPosts()