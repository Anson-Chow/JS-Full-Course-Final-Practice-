// Q1

// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

//Q2

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logOutArray(arr){
    for(let i = 0; i < myCourses.length; i++ ){
        console.log(arr[i])
    }

}
logOutArray(myCourses)

//Q3 

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

// localStorage.setItem("Number", "One")
let number = localStorage.getItem("Number")
console.log(number)

//Q4 

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

// const janeBtn = document.getElementById("jane-btn")
// janeBtn.addEventListener("click", function(){
//     console.log(data[0].score)
// })

// Q5. 

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++){
        if(i === lastIndex){
        baseString += arr[i] 
        }
        else{
        baseString += arr[i] + ", "
        }
    }
    return baseString
}

const sentence = generateSentence ("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)


//Q6. 

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages (){
    let imgsDOM = ""
    for(let i = 0; i < imgs.length; i ++){
       imgsDOM += `<img alt="Employee Photo" class = "team-img" src="${imgs[i]}">`
       
    }
    container.innerHTML += imgsDOM

}

renderImages()

//Q7.

// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

// const totalPrice = 420.69235632455
// const btn = document.getElementById("purchase-btn")
// btn.textContent = `Buy ???${ totalPrice.toFixed(2) }`

//ADDED toFixed(2) to round to two decimal places

//Q8. 

// Challenge:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it

// const totalPrice = "420.69235632455"
// const btn = document.getElementById("buy-btn")
// btn.textContent = `Buy ???${ Number(totalPrice.toFixed(2) }`

// Added Number() function to convert the string to an int. Can also use parseFloat() but it will return NaN if it is an empty string