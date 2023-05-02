//Write a function that takes a string and returns true 
//if the string is a palindrome (reads the same backward as forward), and false otherwise.

const checkForPalindrome = (someString) => {
    //taking the introduced string, changing it to lower case and removing spaces with replaceAll
    strWithoutSpaces = someString.toLowerCase().replaceAll(" ", "")
    console.log("String without spaces:", strWithoutSpaces)

    //initialized array to store each character in the string by iterating through it
    let arrForStr = []
    for (let i = 0; i < strWithoutSpaces.length; i++) {
        arrForStr.push(strWithoutSpaces[i])
    }
    //new variable to reverse each element in the array and converting it to a string
    const reversedArrToStr = arrForStr.reverse().toString()

    const reversedStr = reversedArrToStr.replaceAll(",", "")
    console.log("Reversed string without spaces:", reversedStr)

    return

    // if (strWithoutSpaces === strWithoutSpacesReverse) {
    //     return (`the sentence ${someString} is a palindrome`)
    // } else {
    //     return (`the sentence ${someString} is not a palindrome`)
    // }

}

console.log(checkForPalindrome("AnitaLavalatina"))