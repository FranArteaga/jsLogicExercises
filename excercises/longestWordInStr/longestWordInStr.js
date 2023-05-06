//Write a function that takes a string and 
//returns the longest word in the string.

const longStr = "se supone que este sea un string largo"

const longestWordInStr = (string) => {
    let stringToArray = string.split(" ")
    let longestWord = ""

    return stringToArray.filter(word =>
        word.length >= longestWord).map(word => {
            if (longestWord = word) 
            {

                return longestWord
            }
        }
        )
}