//Find reading in the README

// Higher Order Function
function highOrder(){
    return function(){
        console.log("I am a highorder function")
    }
}

// Higher Order Function
function higherOrder(callback) {
    console.log('From Inside of Higher Order');
    callback();
}
  
// Callback
function logHello() {
    console.log('Hello');
}

// Passing callback into higher-order function
higherOrder(logHello)


// Storage in other data structure
function funky() { console.log("Funky"); }
function pizza() { console.log("Pizza"); }

let array = [];

array.push(funky);
array.push(pizza);

array[0](); // => "Funky"
array[1](); // => "Pizza"

let obj = {};

obj.cool = funky;
obj.pizza = pizza;

obj.cool(); // => "Funky"
obj.pizza(); // => "Pizza"


// Declarative versus imperative

// Imperative
function sum(a){
    return function(b){
        return a+b
    }
}

sum(5)(10) //returns 15

// Declarative
let add = (a) => (b) =>  a + b

add(5)(10) //returns 15

// Pure function
function pure(num){
    return num * 2
}

// Impure function
let multiplier = 4
function impure(num){
    return num * multiplier
} 

// Composition
let arr = [10,20,30]

arr.map(num => num * 2).reduce((acc,num) => acc + num ) //returns 120

// Tasks

let array = [1,2,3,4,5]

// 1. For each number in the array console log "Number is:" followed by the number
array.forEach(num => console.log("Number is:", num))

// 2. Return a new array with cube of numbers from current array
array.map(num => num*num*num)

// 3. Return all the even numbers from the array
array.filter(num => num % 2 === 0)

// 4. Return only first odd number from the array
array.find(num =>  num % 2 !== 0)

// 5. Multiply first two numbers from the array and then multiply the result with next number
array.reduce((acc,number) =>  num * acc, 1) //here 1 is intial value for accumulator