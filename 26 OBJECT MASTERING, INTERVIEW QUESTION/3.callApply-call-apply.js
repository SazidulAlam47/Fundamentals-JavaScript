const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 1500,
    getFullName: function(){
         console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount + tips - tax;
        return this.salary;
    }
};

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 50000
};

normalPerson.chargeBill.call(heroPerson, 500, 1000, 100); // this er value er pore paramater gula koma dia hobe
normalPerson.chargeBill.call(heroPerson, 1500, 1500, 50);
console.log(heroPerson.salary);


normalPerson.chargeBill.apply(heroPerson, [500, 1000, 100]); // this er value er pore paramater gula array er moddhe hobe
normalPerson.chargeBill.apply(heroPerson, [1500, 1500, 50]);
console.log(heroPerson.salary);
