let nums = [1,2,3,4,5,6,7,8];

const part = nums.slice(2, 5);
console.log(part);

const removeLast = nums.slice(0, -1);
console.log(removeLast);

const removed = nums.splice(2,3);
console.log(removed);
console.log(nums);

nums = [1,2,3,4,5,6,7,8];
const removed2 = nums.splice(2,3, 77,88,99);
console.log(removed);
console.log(nums);

const together = nums.join(",")
console.log(together);