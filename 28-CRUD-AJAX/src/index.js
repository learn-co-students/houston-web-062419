document.addEventListener('DOMContentLoaded', () => {
  let allPokemonData = []
  const pokemonForm = document.querySelector("#pokemon-post-form")
  
  
  fetch('http://localhost:3000/pokemon'/*, { method: 'GET' }*/)
    .then((responseObject) => responseObject.json())
    .then((pokeJSONData) => {
      allPokemonData = pokeJSONData
     renderAllPokemon(allPokemonData)
    })

  pokemonForm.addEventListener("submit", (event) => {
    event.preventDefault()
    // debugger

    const name = event.target[0].value
    const image = event.target[1].value

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "sprites": {
          "front": image
        }
      })
    })
    .then(res => res.json())
    .then(pokemon => {
        addPokemon(pokemon)
        // pokemonForm.innerHTML = ""  //tested and works
        pokemonForm.reset()
    } ) 

  })


})
