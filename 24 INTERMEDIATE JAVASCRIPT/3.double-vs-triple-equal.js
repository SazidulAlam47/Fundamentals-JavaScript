function doubleCheck(first, second){
    if(first == second){
        console.log("condition is true");
    }
    else{
        console.log("condition is false");
    }
}
function tripleCheck(first, second){
    if(first === second){
        console.log("condition is true");
    }
    else{
        console.log("condition is false");
    }
}
doubleCheck(2, '2');
doubleCheck(1, true);
doubleCheck(0, false);

tripleCheck(2, '2');
tripleCheck(1, true);
tripleCheck(0, false);

// double equal checks the value only. if the type does not match but the value is similar than also it will be true
// triple equal checks the value and the type; if the type does not match it will give me false