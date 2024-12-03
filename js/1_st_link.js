// 1. Create a variable called carName, assign the value Volvo to it. Display the value of carName.
let carName = 'Volvo'

// 2. On one single line, declare three variables with the following names and values:
let firstName = 'John',
  lastName = 'Doe',
  age = 30

// 3. Use the correct assignment operator that will result in x being 50 (same as x = x * y).

let x = 10
let y = 5
x *= 5
console.log(x)

// 4. Use comments to describe the correct data type of the following variables:

let length = 16 // data type ? ans: number
let lastName1 = 'Johnson' // data type ? ans: string

const obj = {
  firstName: 'John',
  lastName: 'Doe',
} // data type ? ans: object

// 5. Execute the function named myFunction.

function myFunction() {
  //   alert('Hello World!')
}

// call the function and see the output
myFunction()

// 6. Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

const person = {
  name: 'John',
  age: 50, // access the object to alert("John is 50")
}
// alert(`${person.name} is ${person.age}`)

// 7. The <button> element should do something when someone clicks on it. Try to fix it!
function btnClick() {
  alert('You clicked me!')
}

/**
 * --------------------- 8. Array Related Question ---------------------
 * 1. Alert the number of items in an array, using the correct Array property:
 */
const cars = ['Volvo', 'Jeep', 'Mercedes']
console.log(`Car Length is: ${cars.length}`)

/**
 * --------------------- 8. Array Related Question ---------------------
 * 2. Change the first item of Brand to "Ford"
 */
cars[0] = 'Ford'
console.log(cars)

/**
 * --------------------- 9. Math Related Problems ---------------------
 * 1. Use the correct Math method to create a random number.
 */
let randomNum = Math.random()
console.log(randomNum)

/**
 * --------------------- 9. Math Related Problems ---------------------
 * 2. Use the correct Math method to return the largest number of 10 and 20.
 */
let maxNum = Math.max(10, 20)
console.log(maxNum)

/**
 * --------------------- 9. Math Related Problems ---------------------
 * 3. Use the correct Math method to get the square root of 9.
 */
let squareRoot = Math.sqrt(9)
console.log(squareRoot)

/**
 * ------------------- 10. comparison operator related problems!  -------------------
 * 1. Choose the correct comparison operator to alert true, when x is greater than y.
 */
let num1 = 10
let num2 = 5
if (num1 > num2) {
  alert(true)
}

/**
 * ------------------- 10. comparison operator related problems!  -------------------
 * 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
 */
const personAge = 20
alert(personAge < 18 ? 'Too young' : 'Old enough')
