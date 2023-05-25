//Print integers one-to-N, 
//but print “Fizz” if an integer is divisible by three, 
//“Buzz” if an integer is divisible by five, 
//and “FizzBuzz” if an integer is divisible by both three and five.

const fizzBuzz = (maxNumber) => {
    let i = 1
    for (i = 1; i <= maxNumber; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }

    }
    return i
}

fizzBuzz(22)