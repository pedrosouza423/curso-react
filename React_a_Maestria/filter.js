//Filter => You create another variable witch is filtered by condition.
const array = [
    {
        nome:"Pedro",
        available:true,
    },
    {
        nome:"Geovana",
        available:true,
    },
    {
        nome:"Silmaria",
        available:false,
    },
];

//Filter => Returns the elements of an array that meet the condition specified in a callback function.
const userAvailable = array.filter(user => user.available)
const userNotAvailable = array.filter(user => !user.available)

console.log(userAvailable)
console.log(`Not avaible number : ${userNotAvailable}`)
