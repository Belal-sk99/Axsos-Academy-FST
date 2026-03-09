console.log(`-----------------------\nOdd numbers from 1 to 20 : `);
for (let i = 1; i <= 20; i += 2) console.log(i);

console.log(`-----------------------\nMultiples of 3 : `);
for (let i = 99; i >= 3; i -= 3) console.log(i);

console.log(`-----------------------\nSequence by decrement of 1.5: `);
for (let i = 4; i > -4; i -= 1.5) console.log(i);

console.log(`-----------------------`);
var sum = 0;
for (let i = 1; i <= 100; i++) sum += i;
console.log(`sum of number from 1 to 100  =  ${sum}`);

console.log(`-----------------------`);
let product = 1;
for (let i = 1; i <= 12; i++) product *= i;
console.log(`Factorial of 12  =  ${product}`);
