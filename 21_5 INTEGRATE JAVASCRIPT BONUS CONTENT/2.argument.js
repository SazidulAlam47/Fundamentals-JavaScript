function getFullName() {
    let fullname = '';

    for (let i = 0; i < arguments.length; i++) {
        const partName = arguments[i];
        fullname = fullname + ' ' + partName;
    }
    return fullname;

}

const Name = getFullName('omuk', 'tomuk', 'cumuk');
console.log(Name);