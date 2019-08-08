function renderAllPokemon(pokemonArray) {
  pokemonArray.map(function(pokemon){
    addPokemon(pokemon);
  })
}

function addPokemon(pokemon) {
  const pokemonContainer = document.querySelector('#pokemon-container')
  const div = renderSinglePokemon(pokemon);
  pokemonContainer.append(div);
}

function renderSinglePokemon(pokemon) {
  const mainDiv = document.createElement('div')
  mainDiv.className = "pokemon-card"
  mainDiv.setAttribute("data-id", pokemon.id)

  const nameDiv = document.createElement('div')
  nameDiv.className = "pokemon-frame"
  
  const h1 = document.createElement('h1')
  h1.className = "center-text"
  h1.innerText = pokemon.name

  const imgDiv = document.createElement('div')
  imgDiv.className = "pokemon-image"

  const img = document.createElement("img")
  img.className = "toggle-sprite"
  img.src = pokemon.sprites.front

  const editButton = document.createElement("button")
  editButton.className = "pokemon-button"
  editButton.innerText = "EDIT"

  const delButton = document.createElement("button")
  delButton.className = "pokemon-button"
  delButton.innerText = "DELETE"

  imgDiv.append(img)
  nameDiv.append(h1,imgDiv,editButton,delButton)
  mainDiv.append(nameDiv)

  //event listener for edit-button
  editButton.addEventListener("click", () => {

    const editForm = document.querySelector("#edit-form")
    editForm[0].value = pokemon.name
    editForm[1].value = pokemon.sprites.front

      //event listener for edit-form
      editForm.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log(editForm)
        // debugger
  
        fetch(`http://localhost:3000/pokemon/${pokemon.id}`,{
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: event.target[0].value,
            sprites: {
              front: event.target[1].value
            }
          })
        })
        .then(res => res.json())
        .then(pokemon => {
          h1.innerText = pokemon.name
          img.src = pokemon.sprites.front
        })


      })
    // debugger
  
  })

  //event listner for delete button 
  delButton.addEventListener("click",() => {

    fetch(`http://localhost:3000/pokemon/${pokemon.id}`, {
      method: "DELETE"
    })
    .then(() => {
      mainDiv.remove()
    })
  })

  return mainDiv
}
