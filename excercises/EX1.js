// Write a function that takes an array of numbers 
// and returns the sum of all even numbers in the array.
const ArrOfNums = [5, 4, 6, 8, 2, 4, 42, 35, 11]

const sumOfNumsInArr = (anArray) => {
    const evenNumsInArray = []
    anArray.forEach(evenNum => {
        if (evenNum % 2 === 0) {
            evenNumsInArray.push(evenNum)
            console.log(evenNumsInArray)
        }
    })

}
sumOfNumsInArr(ArrOfNums)
