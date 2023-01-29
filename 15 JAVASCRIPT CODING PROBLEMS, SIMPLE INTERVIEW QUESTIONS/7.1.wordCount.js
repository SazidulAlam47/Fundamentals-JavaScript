let speech = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti porro minus enim adipisci maiores non debitis ad repellat cumque.";

let count = 0;
for (let i = 0; i < speech.length; i++) {
    if (speech[i] == ' ') {
        count++;
    }
}
count++;

console.log(count);