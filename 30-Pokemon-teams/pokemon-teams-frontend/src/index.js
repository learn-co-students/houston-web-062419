const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

fetch(TRAINERS_URL)
.then(res => res.json())
.then(trainers => {
    trainers.forEach(trainer => {
        trainerCard(trainer)
    })
})

function trainerCard(trainer){
    //   <div class="card" data-id="1">
    //   <p>Prince</p>
    //   <button data-trainer-id="1">Add Pokemon</button>
    //   <ul>
    //     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    //     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    //     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    //     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    //     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
    //   </ul>
    // </div>
    const main = document.querySelector("main")

    const div = document.createElement("div")
    div.className = "card"
    div.setAttribute("data-id", trainer.id)

    const p = document.createElement("p")
    p.innerText = trainer.name

    const btn = document.createElement("button")
    btn.setAttribute("data-trainer-id", trainer.id)
    btn.innerText = "Add Pokemon"

    btn.addEventListener("click", () => {
        // console.log(trainer.id)
        AddPokemon(trainer.id, div)
        
    })

    const ul = document.createElement("ul")

    trainer.pokemons.forEach(pokemon => {
        // const li = document.createElement("li")
        // li.innerText = `${pokemon.nickname} (${pokemon.species})`

        // const button = document.createElement("button")
        // button.innerText = "Release"
        // button.className = "release"
        // button.setAttribute("data-pokemon-id", pokemon.id)

        // button.addEventListener("click", () => {
        //     fetch(`${POKEMONS_URL}/${pokemon.id}`,{
        //         method: "DELETE"
        //     })
        //     .then(() => {
        //         li.remove()
        //     })
        // })

        // li.append(button)

        const li = renderPokemon(pokemon)

        ul.append(li)
    })

    div.append(p, btn, ul)

    main.append(div)

}

function AddPokemon(id, div){
    console.log(div)
    fetch(POKEMONS_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "trainer_id": id
        })
    })
    .then(res => res.json())
    .then(pokemon => {
        // console.log(div)

        if(!pokemon.error){
            const newli = renderPokemon(pokemon) 
    
            div.children[2].append(newli)
        }
        

        // debugger
    })
}

function renderPokemon(pokemon){
    const li = document.createElement("li")
    li.innerText = `${pokemon.nickname} (${pokemon.species})`

    const button = document.createElement("button")
    button.innerText = "Release"
    button.className = "release"
    button.setAttribute("data-pokemon-id", pokemon.id)

    button.addEventListener("click", () => {
        fetch(`${POKEMONS_URL}/${pokemon.id}`,{
            method: "DELETE"
        })
        .then(() => {
            li.remove()
        })
    })

    li.append(button)

    return li
}





