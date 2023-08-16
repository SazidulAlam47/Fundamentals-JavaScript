const ages = [12, 14, 15, 18];
const ages2 = [36, 46, 26];

const allAges1 = [ages, ages2];
const allAges2 = [...ages, ...ages2];

console.log(allAges1);
console.log(allAges2);