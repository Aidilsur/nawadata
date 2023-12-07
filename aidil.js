// solution number 1

function sortAndSeparate(str) {
  const newStr = str.replace(/\s/g, "").toLowerCase();

  const vowels = newStr.match(/[aeiou]/g) || [];
  const consonants = newStr.match(/[^aeiou]/g).join("") || [];

  const sortedVowels = vowels
    .sort((a, b) => str.indexOf(a) - str.indexOf(b))
    .join("");

  return {
    sortedVowels,
    consonants,
  };
}

// Example:
const inputString = "Sample Case";
const result = sortAndSeparate(inputString);

console.log("Original String:", inputString);
console.log("Sorted String:", result.sortedVowels);
console.log("Consonants:", result.consonants);

// solution number 2

function minBusesRequired(n, familyMembers) {
  if (n !== familyMembers.length) {
    return "Input must be equal with count of family";
  }

  const totalMembers = familyMembers.reduce((sum, members) => sum + members, 0);
  const busesRequired = Math.ceil(totalMembers / 4);

  return busesRequired;
}

// Example:
const numberOfFamilies = 5;
const familyMembers = [1, 5];

const res = minBusesRequired(numberOfFamilies, familyMembers);

console.log(res);
