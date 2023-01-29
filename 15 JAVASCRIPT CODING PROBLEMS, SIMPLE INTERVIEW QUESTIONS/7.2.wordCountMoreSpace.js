let speech = "   i    love   you   ";

let count = 0;
for (let i = 0; i < speech.length; i++) {
    if (speech[i] == ' ' && speech[i - 1] != ' ') {
        count++
    }
    if (speech[i] == ' ' && (speech[i - 1] == undefined || speech[i + 1] == undefined)) {
        count--;
    }
}
count++;

console.log(count);