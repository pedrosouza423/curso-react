interface User {
    nome: string;
    bio: string;
    age: number;
}

function sumAge(users: User[]): number{
    let sum = 0;

    for (const user of users) {
        sum += user.age;
    }

    return sum;
}

const users = [
    {nome: 'Pedro', bio: 'exemple', age: 20},
    {nome: 'Leticia', bio: 'exemple2', age: 25},
    {nome: 'Roberto', bio: 'exemple3', age: 30} 
]

console.log(sumAge(users))