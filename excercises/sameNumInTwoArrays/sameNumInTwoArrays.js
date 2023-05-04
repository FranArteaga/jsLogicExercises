//Write a function that takes two arrays of numbers 
//and returns a new array with only the numbers that appear in both arrays.
//extra: make the returned array to exclude duplicated numbers

arrOfNumsOne = [7, 1, 3, 15, 31, 10,12]
arrOfNumsTwo = [13, 15, 12, 42, 12, 1]

const matchingNumbersInArrays = (arrayOne, arrayTwo) => {
    let arrOfMatchingNums = []
    arrayOne.forEach(number1 => {
        arrayTwo.forEach(number2 => {
            if (number2 === number1 && !arrOfMatchingNums.includes(number2)) {
                arrOfMatchingNums.push(number2)
            }
        })
    })
    return arrOfMatchingNums
}
console.log(matchingNumbersInArrays(arrOfNumsOne, arrOfNumsTwo))