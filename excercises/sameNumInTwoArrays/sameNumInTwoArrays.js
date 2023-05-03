//Write a function that takes two arrays of numbers 
//and returns a new array with only the numbers that appear in both arrays.

arrOfNumsOne = [7, 1, 12, 3, 15, 31, 10]
arrOfNumsTwo = [12, 13, 15, 42, 1]

const matchingNumbersInArrays = (arrayOne, arrayTwo) => {
    let arrOfMatchingNums = []
    arrayOne.forEach(number1 => {
        arrayTwo.forEach(number2 => {
            if (number2 === number1) {
                arrOfMatchingNums.push(number2)
            }
        })
    })
    return arrOfMatchingNums
}
console.log(matchingNumbersInArrays(arrOfNumsOne, arrOfNumsTwo))