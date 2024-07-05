const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 1500,
    getFullName: function(){
         console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

normalPerson.getFullName();
let oldMoney = normalPerson.chargeBill(500);
normalPerson.chargeBill(100);
console.log(oldMoney, normalPerson.salary);
