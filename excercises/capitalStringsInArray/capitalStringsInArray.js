//Write a function that takes an array of strings and returns 
//a new array with all the strings capitalized.

let arrStrings = ["mensaje1", "hola", "este es otro mensaje"]

const capitalizeStrings = (arrayOfStrings) => {
    return arrayOfStrings.map(unString => {
       return unString.charAt(0).toUpperCase() + unString.slice(1)
    })
}

console.log(capitalizeStrings(arrStrings))