// It might be a good idea to add event listener to make sure this file 
// only runs after the DOM has finshed loading. 

document.addEventListener("DOMContentLoaded", () => {

const ul = document.querySelector("#quote-list")
const form = document.querySelector("#new-quote-form")
const sortBtn = document.querySelector("#sort")

fetch("http://localhost:3000/quotes?_embed=likes")
.then(res => res.json())
.then(quotes => {
    quotes.forEach(quote => renderQuote(quote))
})

function renderQuote(quote){
//     <li class='quote-card'>
//     <blockquote class="blockquote">
//       <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
//       <footer class="blockquote-footer">Someone famous</footer>
//       <br>
//       <button class='btn-success'>Likes: <span>0</span></button>
//       <button class='btn-danger'>Delete</button>
//     </blockquote>
//   </li>

        const li = document.createElement("li")
        li.className = "quote-card"

        const bq = document.createElement("blockquote")
        bq.className = "blockquote"

        li.append(bq)

        const p = document.createElement("p")
        p.className = "mb-0"
        p.innerText = quote.quote

        const footer = document.createElement("footer")
        footer.className = "blockquote-footer"
        footer.innerText = quote.author

        const br = document.createElement("br")

        const likeBtn = document.createElement("button")
        likeBtn.className = "btn-success"
        // likeBtn.innerHTML = `Likes: <span>${quote.likes.length}</span> `
        likeBtn.innerText = "Likes: "

        const span = document.createElement("span")
        // debugger
        if(quote.likes){
            span.innerText = quote.likes.length
        }else{
            span.innerText = 0
        }
      

        likeBtn.append(span)

        likeBtn.addEventListener("click", () => {
            addLikes(quote, span)
        })

        const editBtn = document.createElement("button")
        editBtn.className = "btn-primary"
        editBtn.innerText = "Edit"

        editBtn.addEventListener("click", () => {
            editQuote(quote, p, footer)
        })

        const deleteBtn = document.createElement("button")
        deleteBtn.className = "btn-danger"
        deleteBtn.innerText = "Delete"

        deleteBtn.addEventListener("click", () => {
            deleteQuote(quote, li)
        })

        bq.append(p, footer, br, likeBtn, editBtn, deleteBtn)

        ul.append(li)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    // const quote = e.target[0].value
    // const author = e.target[1].value

    fetch("http://localhost:3000/quotes",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "quote": e.target[0].value,
            "author": e.target[1].value 
        })
    })
    .then(res => res.json())
    .then(quote => renderQuote(quote) )
})

function addLikes(quote, span){

    fetch("http://localhost:3000/likes",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "quoteId": quote.id
        })
    })
    .then(res =>  res.json())
    .then(() => {
        // console.log(span)
        // debugger
        let likes = parseInt(span.innerText)
        span.innerText = ++likes
    })
}

function deleteQuote(quote,li){

    fetch(`http://localhost:3000/quotes/${quote.id}`,{
        method: "DELETE"
    })
    .then(() => {
        li.remove()
    })
}

function editQuote(quote, p, footer){
    // console.log(form)
    // debugger
    form.children[0].children[0].innerText = "Current quote"
    form[0].value = quote.quote
    form[1].value = quote.author
    form[2].innerText = "Edit"

    form[2].addEventListener("click", () => {
        // debugger
        fetch(`http://localhost:3000/quotes/${quote.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "quote": form[0].value,
                "author": form[1].value
            })
        })
        .then(res => res.json())
        .then(quote => {
            p.innerText = quote.quote
            footer.innerText = quote.author
        })
    })
}//small bug to fix


sortBtn.addEventListener("click", () => {
    ul.innerHTML = ""
    fetch("http://localhost:3000/quotes?_sort=author")
        .then(res => res.json())
        .then(quotes => {
            quotes.forEach(quote => renderQuote(quote))
        })
})




})