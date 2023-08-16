class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'amader school';
    }
}

const student1 = new Student(12, 'shuvo');
const student2 = new Student(23, 'kafi ');

console.log(student1, student2);