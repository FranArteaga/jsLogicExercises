// Write a function that takes a string 
// and returns the number of vowels in the string.
const countVowelsInString = (someString) => {
    
    let numOfVowels = 0
    let vowels = ["a","e","i","o","u"]
    
    for(let i = 0; i < someString.length; i++){
        
        if(vowels.includes(someString[i])){
            numOfVowels +=1
             
        }
    }
    return numOfVowels
    
}
let messageOne = "message"
console.log(countVowelsInString(messageOne))


//cómo capitalizar primera letra
// let messageTwo = messageOne.charAt(0).toLocaleUpperCase() + messageOne.slice(1)
// console.log(messageTwo)