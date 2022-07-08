
const container = document.querySelector('#pokemon-container')
const btnAnterior = document.querySelector('#anterior')
const btnSiguiente = document.querySelector('#siguiente')

let id = 1

// const llamarPokemon = () => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         .then((resp) => resp.json())
//         .then((data) => {

//             const {name, sprites: {front_default: img}} = data

            // container.innerHTML = `
            //         <h4>${name}</h4>
            //         <img src=${img} alt=${name}/>
            // `
//         })
// }

const llamarPokemon = async () => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await resp.json()
    
    const {name, sprites: {front_default: img}} = data

    container.innerHTML = `
                    <h4>${name}</h4>
                    <img src=${img} alt=${name}/>
            `
}

btnSiguiente.addEventListener('click', () => {
    id++
    llamarPokemon()
})

btnAnterior.addEventListener('click', () => {
    if (id === 1) { return }

    id--
    llamarPokemon()
})

llamarPokemon()