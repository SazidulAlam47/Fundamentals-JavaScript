class Parent{
    constructor(){
        this.fatherName = "amader Bap";
    }
} 
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + ' ' + this.fatherName;
    }
}
const baby = new Child("Akram");
const baby2 = new Child("Bakram");

console.log(baby, baby2);
console.log(baby.getFullName()); 