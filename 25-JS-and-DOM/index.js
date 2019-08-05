console.log("First console log statement!!")

let name = document.getElementById('first')

// debugger

let p =document.querySelectorAll('p')[1]
p.attributes.style.value = "color:green"

let h1 = document.createElement('h1')
h1.innerText = "Just created!!!"

let h2 = document.createElement('h2')
h2.innerText = "created!!!"

let div = document.querySelector('div')
div.append(h1, h2)

let image = document.createElement('img')
// image.setAttribute('src','giphy.gif')
image.src = "giphy.gif"
// debugger
document.body.append(image)


image.className = "sty"


let pTags = document.querySelectorAll("p")
// debugger


pTags.forEach(function(p){

    p.innerText = "Flatiron Students"
    
})