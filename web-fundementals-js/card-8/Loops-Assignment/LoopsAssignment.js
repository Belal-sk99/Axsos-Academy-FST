console.log(`-----------------------\nCounting from 1 to 10 : `);
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log(`-----------------------\nReverse counting from 10 to 1 : `);
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log(
  `-----------------------\nEven numbers from 1 to 20 using increment : `,
);
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
console.log(`-----------------------\nEven numbers from 1 to 20 using % : `);
for (let i = 1; i <= 20; i++) if (i % 2 === 0) console.log(i);

console.log(`-----------------------\nOdd numbers from 1 to 20 using % : `);
for (let i = 1; i <= 20; i++) if (i % 2 !== 0) console.log(i);
console.log(
  `-----------------------\nOdd numbers from 1 to 20 using increment : `,
);
for (let i = 1; i <= 20; i += 2) console.log(i);

console.log(`\n-----------------------`);
var sum = 0;
for (let i = 1; i <= 10; i++) sum += i;
console.log(`sum of number from 1 to 10  =  ${sum}`);

console.log(`-----------------------\nFizzbuzz from 1 to 30 : `);
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
