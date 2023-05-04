//Write a function that takes an array of objects with "name" and "age" properties, 
//and returns a new array with only the objects where the person's age is greater than 18.

const citizens = [
    {
        name: 'Alice',
        age: 30
    },
    {
        name: 'Bob',
        age: 19
    },
    {
        name: 'Charlie',
        age: 8
    },
    {
        name: 'David',
        age: 26
    },
    {
        name: 'Emily',
        age: 17
    }
]

const usersThatCanVote = (arrOfUsers) => {
    let citizen18OrOlder = []
    arrOfUsers.forEach(user => {
        if (user.age >= 18) {
            citizen18OrOlder.push(user)
        }
    })
    return citizen18OrOlder
}

console.log(usersThatCanVote(citizens))