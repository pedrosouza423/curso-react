class Person{
    constructor(name, idade){
        this.name = name;
        this.idade = idade;  
    }
}

const person = new Person("Pedro",20);

console.log(person);

class Employee extends Person{
    constructor(name, idade, cargo){
        super(name, idade)
        this.cargo = cargo;
    }
}

const employee = new Employee("Pedro", 20, "Programador")
console.log(employee);