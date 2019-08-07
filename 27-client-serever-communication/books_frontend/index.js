function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  book_list.appendChild(div);
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.innerText = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  //add all elements to div
  div.append(img,h3,p);
  // div.appendChild(h3);
  // div.appendChild(p);

  return div;
}

function showBooks(bookArray) {
  bookArray.map(function(book){
    addBook(book);
  })
  // bookArray.map(book => {
  //   addBook(book);
  // }); 
  //arrow function () => {}
}

// what happens when books isn't defined?
// showBooks(books);
console.log("I am before fetch")

fetch("http://localhost:3000/books",{
  method: "GET"
})
.then(function(res){
  return res.json()
})
.then(function(books){

  showBooks(books)
  console.log("I am fetching books!!!")
})


// fetch("https://swapi.co/api/people/")
// .then(function(res){
//   return res.json()
// })
// .then(function(data){
//   console.log(data.results)
//   console.log("I am fetching starwars people!!!!")
// })

// fetch("https://dog.ceo/api/breeds/image/random")
// .then(function(res){
//   return res.json()
// })
// .then(function(dogImage){
//   console.log(dogImage)
//   console.log("I am fetching dog's image")
// })

// fetch("http://localhost:3000/books", {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//       "title": "temp",
//       "author": "Vidhi",
//       "img": "https://images-na.ssl-images-amazon.com/images/I/31AYTZWPCPL._SX309_BO1,204,203,200_.jpg"
//   })
// })



const form = document.querySelector("#book-info")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  let title = event.target[0].value
  let author = event.target[1].value
  let imageUrl = event.target[2].value

  fetch("http://localhost:3000/books", {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      "title": title,
      "author": author,
      "img": imageUrl
  })
}).then(res => res.json())
.then(book => {
  addBook(book)
})

})

console.log("I am after fetch")
