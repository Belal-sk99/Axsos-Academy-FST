// =============== Strings Questions ===============
// q1
const reverseString = (str) => {
  const chars = [];
  for (let i = str.length - 1; i >= 0; i--) chars.push(str[i]);
  return chars.join("");
};

console.log(reverseString("hello"));

// q2
const countVowels = (str) => {
  const vowelSet = new Set("aeiou");
  let count = 0;
  for (let i = 0; i < str.length; i++)
    if (vowelSet.has(str[i].toLowerCase())) count++;
  return count;
};

console.log(`number of vowels in hello = ${countVowels("hello")}`);

// q3
const checkPalindrome = (word) => {
  let i = 0,
    j = word.length - 1;
  while (i < j) {
    if (word[i].toLowerCase() !== word[j].toLowerCase()) return false;
    i++;
    j--;
  }
  return true;
};

console.log(checkPalindrome("madam"));

// q4
function longestWord(sentence) {
  if (!sentence?.trim()) return "";

  return sentence
    .trim()
    .split(/\s+/)
    .reduce((longest, word) => (word.length > longest.length ? word : longest));
}
console.log(longestWord("My name is Belal Alkahlout and I'm 26"));

// =============== switch Questions ===============
// switch - 1
const printEval = (grade) => {
  switch (grade?.toUpperCase()) {
    case "A":
      return "Excellent";
    case "B":
      return "Good job";
    case "C":
      return "You passed";
    case "D":
      return "Need improvement";
    case "F":
      return "Failed";
    default:
      return "Invalid grade";
  }
};

console.log(printEval("A"));
console.log(printEval("B"));
console.log(printEval("C"));
console.log(printEval("D"));
console.log(printEval("F"));
console.log(printEval("H"));

// switch - 2
const classifyChars = (word) => {
  const result = { vowels: 0, digits: 0, spaces: 0, others: 0 };
  for (let char of word) {
    const lowerChar = char.toLowerCase();
    switch (true) {
      case "aeiou".includes(lowerChar):
        result.vowels++;
        break;
      case "0123456789".includes(lowerChar):
        result.digits++;
        break;
      case lowerChar === " ":
        result.spaces++;
        break;
      default:
        result.others++;
        break;
    }
  }
  return result;
};

console.log(classifyChars("Hi 123!"));