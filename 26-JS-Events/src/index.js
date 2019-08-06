document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector("#first-btn")
    console.log(btn)

    btn.addEventListener("click", function() {
        console.log("Hi from us to you")
    })

    const form = document.querySelector("#comment-form")
    
    form.addEventListener("submit", function(event){
        event.preventDefault()
        // console.log(event.target[0].value)
        let comment = event.target[0].value
        const div = document.querySelector("#comments-container")

        const p = document.createElement("p")
        p.innerText = comment

        div.append(p)
        // event.target[0].value = ""
        event.target.reset()
        // debugger
    })

    const divTag = document.querySelector("#helicopter-parent")

    divTag.addEventListener("click", function(event){
        // debugger

        if(event.target.dataset.name === "alert"){
            window.alert("It is an alert box!!!")
        }
        if(event.target.dataset.name === "log"){
            console.log("It is a console log!!!")
        }
        if(event.target.dataset.name === "error"){
            console.error("It is a console error!!!")
        }
    })
})









