class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 50000);
console.log(heroPerson);
console.log(heroPerson.salary);

const normalPerson = new Person('Sogir', 'Uddin', 1500);
console.log(normalPerson);