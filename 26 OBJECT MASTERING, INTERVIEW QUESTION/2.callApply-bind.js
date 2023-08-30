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

const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(500, 1000, 100);
heroBillCharge(1500, 1500, 50);
console.log(heroPerson.salary);
