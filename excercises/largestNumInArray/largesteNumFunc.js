//Write a function that takes an array of numbers 
//and returns the largest number in the array.

arrOfNums = [5, 10, 12, 7, 18, 13]
const largestNumFunc = (arr) => {
    let largestNum = 0
    for (let i = 0; i < arr.length; i++) {
        if (largestNum <= arr[i]) {
            largestNum = arr[i]
        }
    }
    return console.log("the largest number is:", largestNum)

}
largestNumFunc(arrOfNums)