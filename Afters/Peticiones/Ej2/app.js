const API_KEY = 'F8OpHcQX4zWWiea6boAd6QRvTtj1ZUc9'

const lista = document.querySelector('#lista')
const form = document.querySelector('#form')
const inputBusqueda = document.querySelector('#input-busqueda')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = inputBusqueda.value
    const limit = document.querySelector('.radio:checked').value
    
    lista.innerHTML = ''

    buscarImgs(value, limit)
})

const buscarImgs = async (query, limit) => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}`)
    const data = await resp.json()
    const {data: imgs} = data
    console.log(imgs)
    imgs.forEach((img) => {

        lista.innerHTML += `
            <li>
                <img src=${img.images.downsized_medium.url}/>
            </li>
        `
    })
}

// const buscarImgs = (query, limit) => {
    
//     fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}`)
//         .then((resp) => resp.json())
//         .then((data) => {
            // const {data: imgs} = data

            // console.log(imgs)

            // imgs.forEach((img) => {

            //     lista.innerHTML += `
            //         <li>
            //             <img src=${img.images.downsized_medium.url}/>
            //         </li>
            //     `
            // })
//         })
// }