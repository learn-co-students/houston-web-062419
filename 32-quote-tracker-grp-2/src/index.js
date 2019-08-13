// It might be a good idea to add event listener to make sure this file 
// only runs after the DOM has finshed loading. 

document.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector("#quote-list")
    const form = document.getElementById("new-quote-form")
    const div = document.getElementById("edit-quote")
    const sort = document.querySelector("#sort")


    fetch("http://localhost:3000/quotes?_embed=likes")
    .then(res => res.json())
    .then(quotes => {
        quotes.forEach(quote => {
            quoteCard(quote)
        })
    })

    function quoteCard(quote){
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
        li.className =  "quote-card"

        const bq = document.createElement("blockquote")
        bq.className = "blockquote"

        const p = document.createElement("p")
        p.className = "mb-0"
        p.innerText = quote.quote

        const footer = document.createElement("footer")
        footer.className = "blockquote-footer"
        footer.innerText = quote.author

        const br = document.createElement('br')

        const likebtn = document.createElement("button")
        likebtn.className = "btn-success"
        likebtn.innerText = "Likes: "

        const span = document.createElement("span")
        if(quote.likes){
            span.innerText = quote.likes.length
        }else{
            span.innerText = 0
        }
       

        likebtn.append(span)

        likebtn.addEventListener("click", ()=> {
            addLikes(quote, span)
        })

        const editBtn = document.createElement("button")
        editBtn.className = "btn-primary"
        editBtn.innerText = "Edit"

        editBtn.addEventListener("click", () => {
            editQuote(quote, p, footer)
        })

        const deletebtn = document.createElement("button")
        deletebtn.className = "btn-danger"
        deletebtn.innerText = "Delete"

        deletebtn.addEventListener("click", () => {
            deleteQuote(quote, li)
        })

        bq.append(p, footer, br, likebtn, editBtn, deletebtn)

        li.append(bq)

        ul.append(li)
    }


    form.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log("post event listener")
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
        .then(newQuote => {
            quoteCard(newQuote)
        })

    })

    function addLikes(quote, span){

        fetch("http://localhost:3000/likes",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "quoteId": quote.id,
                "createdAt": Date.now()
            })
        })
        .then(() => {
            // console.log(span)
            // span.innerText = quote.likes.length+1

            let likes = parseInt(span.innerText)
            span.innerText = ++likes
        })
    }

    function deleteQuote(quote, li){

        fetch(`http://localhost:3000/quotes/${quote.id}`,{
            method: "DELETE"
        })
        .then(() => li.remove())
        // li.remove() => not reliable optimistic rendering 
    }

    function editQuote(quote, p, footer){
        console.log(form)
        // debugger
        form.children[0].children[0].innerText = "current quote"
        form[0].value = quote.quote
        form[1].value = quote.author
        form[2].remove()

        const btn = document.createElement("button")
        btn.className = "btn-primary"
        btn.innerText = "Edit"

        div.append(btn)

        btn.addEventListener("click", () => {
            console.log("Edit event listener")

            fetch(`http://localhost:3000/quotes/${quote.id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "quote": form[0].value ,
                    "author": form[1].value
                })
            })
            .then(res => res.json())
            .then(quote => {
                p.innerText = quote.quote
                footer.innerText = quote.author

                form.reset()

                form.children[0].children[0].innerText ="new quote"

                const submitbtn = document.createElement("button")
                submitbtn.className = "btn-primary"
                submitbtn.innerText = "Submit"

                form.append(submitbtn)

                btn.remove()
            })
        })
    }

    sort.addEventListener("click", () => {

        ul.innerHTML = ""

        fetch("http://localhost:3000/quotes?_embed=likes&&_sort=author")
        .then(res => res.json())
        .then(quotes => {
            quotes.forEach(quote => quoteCard(quote))
        })
    })

})