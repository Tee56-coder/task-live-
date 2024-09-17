// 2. Find the Maximum Number: Write a function that takes an array of numbers as input and returns the largest number.

// 3. Check if a Number is Even: Write a function that takes a number as input and returns true if it's even, false if it's odd.

// 4. Sum of an Array: Write a function that takes an array of numbers as input and returns the sum of all numbers.

// 5. Find the First Duplicate: Write a function that takes an array of numbers as input and returns the first duplicate number.

// 6. Check if a String is a Palindrome: Write a function that takes a string as input and returns true if it's a palindrome, false if it's not.

// 7. Find the Longest Word: Write a function that takes a string as input and returns the longest word


// 8. Count the Number of Vowels: Write a function that takes a string as input and returns the number of vowels.

// 9. Check if a Number is a Prime Number: Write a function that takes a number as input and returns true if it's a prime number, false if it's not.

// 10. Sort an Array in Ascending Order: Write a function that takes an array of numbers as input and returns the sorted array in ascending order.


// const myName = 'Tomi';
// console.log(`My name is ${myName}. I love this node experience. I can even solve this algebra; x + 6 = 8 and the answer is ${8-6}.`);

// console.log('I dey code o!');
// console.log('I dey code o!');



// 2. Find the Maximum Number: Write a function that takes an array of numbers as input and returns the largest number

// const num = [670, 5, 3333, 0, 34, 657]
// function findMaxNo(arr) {
//     if (arr.length === 0) {
//         return null
//     }
//     let maxNo = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if (maxNo < arr[i]) {
//             maxNo = arr[i]
//         }
//     }
//     return maxNo
// }

// console.log(findMaxNo(num))

// const findMaxNum = arr => arr.length === 0 ? null : Math.max(...arr);

// // console.log(findMaxNum(num));

// console.log(findMaxNum(num));


// function evenCheck(num){
//     if(num === 0){
//         console.log('Enter a number that is not zero!');
//         return;
//     }else if (num % 2 === 0){
//         return 'this is even'
//     } else {
//         return 'this is an odd number'
//     }

// }
// let num = 67


// const evenCheck = num => `The number is ${num === 0 ? undefined : (num % 2 === 0 ? 'even' : 'odd')}`; 
// console.log(evenCheck(num))


// 4. Sum of an Array: Write a function that takes an array of numbers as input and returns the sum of all numbers.
let num = [0, 1, 8, 7, 6, 5]
// function arrSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     } 
//     return sum;
// }

// const arrSum = arr => {
//     return arr.reduce((acc, num) => {
//         return acc + num; 
//     }, 0);
// }

const arrSum = arr => arr.reduce((acc, num) => acc + num, 0) 

// const arrSum = arr => 

// console.log(arrSum(num));

const palindrome = str => str.split('').reverse().join('') === str;
// console.log(palindrome('898s'))

// Find the Longest Word: Write a function that takes a string as input and returns the longest word
let txt = 'the longest word in this is me';
// function findLongestWord(words) {
//     let word = words
//     for(let )
// }

// const longestWord = str => Math.max(...str.split(' ').map(word => word.length));



console.log(longestWord(txt));