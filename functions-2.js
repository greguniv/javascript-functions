/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (a, b) => {
  // ADD YOUR CODE HERE
  if (a > b) {
    return(a);
  }
  else if (b > a) {
    return(b);
  }
};

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (a, b, c) => {
  // ADD YOUR CODE HERE
  if (a > b && a > c) {
    return (a);
  }
  else if (b > a && b > c) {
    return(b);
  }
  else if (c > a && c > b) {
    return (c);
  }
  else {
    return("Try again.")
  }
};
// console.log(maxOfThree(3,6,0))

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (vowel) => {
  // ADD YOUR CODE HERE
  if(vowel === 'a') {
    return true;
  }
  else if(vowel === 'e') {
    return true;
  }
  else if(vowel === 'i') {
    return true;
  }
  else if(vowel === 'o') {
    return true;
  }
  else if(vowel === 'u') {
    return true;
  }
  else {
    return false;
  }
};
// console.log(isCharacterAVowel('y'))
/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = (arr) => {
  // ADD YOUR CODE HERE
  let finalNum = 0;
  for (let i = 0; i < arr.length; i++) {
    finalNum += arr[i];
  }
  return finalNum;
};
multiplyArray = (multi) => {
  let final = 1;
  for (let i = 0; i < multi.length; i++) {
    final *= multi[i];
  }
  return final;
}
console.log(sumArray([1,2,3,4]))
console.log(multiplyArray([1,2,3,4]))

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
function test(a, e, s, h){
  console.log(arguments.length);
}
// test("4","5",8, 5);
/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (reverse) => {
  // ADD YOUR CODE HERE
  let text = '';
  for (let i =reverse.length - 1; i>=0; i--){
    text += reverse[i];
  }
  return text;
};
// console.log(reverseString("Casey is the best!"))
/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (arr) => {
  // ADD YOUR CODE HERE
  let longer = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (longer.length < arr[i].length) {
      longer = arr[i];
    }
  }
  return longer.length;
};
console.log(findLongestWord(['trying', 'onomatopeia', 'planet']))

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (array, number) => {
  let myArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if(array[i].length > number){
      myArray.push(array[i]);
    };
  }
  return myArray;
};

console.log(filterLongWords(["left", "right", "up"], 2))