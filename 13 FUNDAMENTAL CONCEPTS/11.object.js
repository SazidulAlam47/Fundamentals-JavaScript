let student1 = {id:01, stdName:"Rahim", phone:"01911"};
let student2 = {id:02, stdName:"Karim", phone:"01712"};

student1.phone = "01412";
let wantToChange = "phone";
student2[wantToChange] = "01311";

console.log(student1);
console.log(student2);

console.log(`First boy is ${student1["stdName"]}`);