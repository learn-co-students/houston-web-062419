# ES6 syntax & Iterators

![](https://media.giphy.com/media/13twUEuUnCrEju/giphy.gif)

---

## The Following are Used heavily in Mod 4 for React (and are important to know if you're writing modern JavaScript):

#### destructuring

```js
const spaceship = {
    pilot: 'elon musk',
    guidance: 'marc zucc'
}
/* from the object spaceship, please pull out the VALUES stored at pilot and guidance */
const { pilot, guidance } = spaceship

console.log(pilot) // 'elon musk'
console.log(guidance) // 'marc zucc'

```

---

#### key value assignment shortcut

```javascript
const pizza = 'meat-lover'
const restaurant = 'New York Pizza™️'

const pizzaObj = {
  pizza: pizza,
  restaurant: restaurant
}
```

---

#### ES6 Spread Operator

```js
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

```

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6
```
---

#### all the forms of arrow functions

```javascript

const implicitReturn = () => 'hi'
const explicitReturn = () => {
  return 'hi'
}

```

---

#### ES6 Iterators
* .forEach
* .map
* .find
* .filter
* .reduce
* for...in
* for...of