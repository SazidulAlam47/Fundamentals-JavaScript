const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'}
];

// old
const names = [];
for (let i = 0; i < students.length; i++) {
    const s = students[i];
    names.push(s.name);
}
console.log(names);

//map
const names2 = students.map(s => s.name);
console.log(names2);

//filter
const backBencher = students.filter(s => s.id > 40);
console.log(backBencher);