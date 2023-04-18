// Write a function that takes an array of numbers 
// and returns the sum of all even numbers in the array.
const ArrOfNums = [6, 5, 2, 8, 35, 4, 11]

const sumOfEvenNumsInArr = (anArray) => {
    const evenNumsInArray = []
    anArray.forEach(evenNum => {
        if (evenNum % 2 === 0) {
            evenNumsInArray.push(evenNum)
            let sumEvenNums = 0
            for (let i = 0; i < evenNumsInArray.length; i++) {
                sumEvenNums += evenNumsInArray[i]
                console.log(sumEvenNums)
            } 
        }
    })

}
sumOfEvenNumsInArr(ArrOfNums)
