//object
const someone = {name: 'Omuk kahn', age:100, job:'ticktocker', phone:'017016778811'};
const {name, age, phone, salary} = someone;
console.log(name, age, phone, salary);

//array
const friend = ['Omuk khan', 'tomuk khan', 'chomok khan', 'reza vai', 'other khan'];
const [firstFriend, nextFriend, ...otherFriends] = friend;
console.log(firstFriend, nextFriend);
console.log(otherFriends);

//nested object
const complexOject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger leader',
    }
}

const {leader} = complexOject.info;
console.log(leader);