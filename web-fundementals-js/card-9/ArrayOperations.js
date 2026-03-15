console.log("---------- Accessing Elements ----------");

let colors = ["red", "blue", "green", "yellow", "purple"];

console.log(colors[0]);
console.log(colors[colors.length - 1]);
console.log(colors[1]);

colors[2] = "orange";
console.log(colors);

console.log("---------- Traversing an Array ----------");
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

console.log("---------- Searching in an Array ----------");
let searchNumbers = [5, 10, 15, 20, 25];
let target = 25;
let index = searchNumbers.indexOf(target);

if (index !== -1) {
  console.log(`Found at position ${index}`);
} else {
  console.log("Not Found");
}

console.log("---------- Sorting an Array ----------");

let scores = [50, 20, 70, 10, 40];

let ascending = scores.sort((a, b) => a - b);
console.log(`Ascending Array: [${ascending}]\n`);

let descending = scores.sort((a, b) => b - a);
console.log(`Descending Array: [${descending}]\n`);

let names = ["Shatha", "Sara", "Lina", "Sami", "Dalia"];
let sortedNames = [...names].sort((a, b) => a.localeCompare(b));
console.log(sortedNames);

console.log("---------- Inserting Elements ----------");
let animals = ["dog", "cat", "rabbit"];

animals.push("elephant");
console.log(animals);

animals.unshift("lion");
console.log(animals);

let dogIndex = animals.indexOf("dog");
animals.splice(dogIndex + 1, 0, "tiger");
console.log(animals);

console.log("---------- Deleting Elements ----------");
let fruits = ["apple", "banana", "cherry", "date"];

fruits.shift();
console.log(fruits);

fruits.pop();
console.log(fruits);

let bananaIndex = fruits.indexOf("banana");
if (bananaIndex !== -1) fruits.splice(bananaIndex, 1);
console.log(fruits);

console.log("---------- Combining Arrays ----------");
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combined = [...array1, ...array2];
console.log(combined);

console.log("---------- Spliting an Array ----------");
let items = ["a", "b", "c", "d", "e"];

let firstPart = items.slice(0, 3);
let secondPart = items.slice(3);
console.log(firstPart);
console.log(secondPart);

console.log("---------- Filtering an Array ----------");
let nums = [1, 5, 10, 15, 20, 25, 30];

let filtered = nums.filter((n) => n > 15);
console.log(filtered);

console.log("---------- Advanced Challenge ----------");
let withDuplicates = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(withDuplicates)];
console.log(unique);

function rotateRight(arr, n) {
  let len = arr.length;
  let steps = n % len;
  return [...arr.slice(len - steps), ...arr.slice(0, len - steps)];
}

console.log(rotateRight([1, 2, 3, 4, 5], 2));

console.log("---------- Bonus Challenge ----------");
function mergeSorted(a, b) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i++]);
    } else {
      result.push(b[j++]);
    }
  }

  while (i < a.length) result.push(a[i++]);
  while (j < b.length) result.push(b[j++]);

  return result;
}

console.log(mergeSorted([1, 3, 5], [2, 4, 6]));

console.log("\n----------------------- End -----------------------\n");
