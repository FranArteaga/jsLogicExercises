//Write a function that takes an array of objects with a "name" property, 
//and returns a new array with only the names of the objects.

const arrOfObjects = [
    {
        name: 'Alice',
        age: 29
    },
    {
        name: 'Bob',
        age: 24
    },
    {
        name: 'Charlie',
        age: 24
    },
]

const getNameFromArray = (someArr) => {
    let arrOnlyNames = []
    someArr.forEach(user => arrOnlyNames.push(user.name))
    return arrOnlyNames
}
console.log(getNameFromArray(arrOfObjects))