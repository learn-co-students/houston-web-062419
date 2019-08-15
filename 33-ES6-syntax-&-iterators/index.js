// Destructuring
const spaceship = {
    pilot: 'elon musk',
    guidance: 'marc zucc'
}
/* from the object spaceship, please pull out the VALUES stored at pilot and guidance */
const { pilot, guidance } = spaceship

console.log(pilot) // 'elon musk'
console.log(guidance) // 'marc zucc'

// Key value assignment shortcut
const pizza = 'meat-lover'
const restaurant = 'New York Pizza™️'

const pizzaObj = {
  pizza: pizza,
  restaurant: restaurant
}

// name of key is the same as the name of the variable we wish to assign to that key
const pizzaObj2 = { pizza, restaurant }

// ES6 spread operators

// Array
let a = [1,2,3]
let b = [4,5,6]

let numbers = [...a, ...b] //[1,2,3,4,5,6]

// Objects

let obj1 = {name: "student", location:"NYC"}
let obj2 = {school: "flatironschool"}

let student = {...obj1, ...obj2} //{name: "student", location: "NYC", school: "flatironschool"}

// How to change single key inside an object?
student.location = "Houston"

// OR
student = {...student, location: "Houston"} // {name: "student", location: "Houston", school: "flatironschool"}

// Arrow functions
const implicitReturn = () => 'hi'

const explicitReturn = () => {
  return 'hi'
}

// ES6 Iterators
console.log("Iterators")

const arr = [1,2,3,4,5]

// Iterate through an array

// .forEach => iterate through an array but not returnin anything

arr.forEach((number) => console.log(number))

// .map => iterate through an array and returns an array with the modification provided in the callback funcation

arr.map((number) => number * 2) //[2,4,6,8,10]

// .find => returns first element from an array which passes the condition

arr.find((number) => number % 2 === 0) // 2

// .filter => returns an array which include all the elements which passes the condition

arr.filter((number) => number % 2 === 0) //[2,4] 

// .reduce => takes a callback function as an argument which require two arguments: 1. Accumulator & 2. array elment -> current element

arr.reduce((acc,number) => acc + number) // 15 => for addition acc starts with 0
arr.reduce((acc,number) => { return acc + number}, 10) // 25 => start acc with 10


// Iterate through an object
const obj = {
    a:10,
    b:20,
    c:30,
    d:40
}

for(const key in obj){
    console.log(obj[key])
}
// 10
// 20
// 30
// 40

// Iterate through an array using for...in
for(const index in arr){
    console.log(arr[index])
}
// 1
// 2
// 3
// 4
// 5

// Iterate through an string using for...in
const string = "String is the coolest"

for(const index in string){
    console.log(string[index]) // prints each character of string on new line in the console
}

// Iterate through an array using for...of
for(const number of arr){
    console.log(number)
}
// 1
// 2
// 3
// 4
// 5

// Iterate through an string using for...of
for(const char of string){
    console.log(char)
}

// Iteration through an object using for...of is not possible

//Variable scope
let text = "062419"

function x(){
    console.log("I am in x function",text)
    let i = "Am I available?"
    console.log("i from x function", i)

    function test(){
    console.log("i from test function", i)
    }

    test()
}

function y(){
    console.log("I am in y function",text)
    console.log("i displayed y function", i) //generate an error
}

x()
y()

console.log("i displayed outside of function", i) //generate an error
