## Array reverse

<!-- alternative of arr.reverse() -->
<!-- Array reverse -->

function reverse(array) {
var arr1 = [];
while (array.length) {
arr1.push(array.pop());
}
return arr1;
}

<!-- returns the last item of the array -->

console.log(arr.pop());

<!-- returns the number that it will replace -->

console.log(arr.push(2));
console.log(reverse(arr));

## String reverse - Array.reverse()

function reverseString(str) {
var splitString = str.split('');
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join('');
return joinArray;
// or
// return str.split('').reverse('').join('');
}
console.log(reverseString('hello world using array'));

## String reverse - without Array.reverse()

// String reverse - without array.reverse()
function revString(str) {
var newString1 = '';
for (var i = str.length - 1; i >= 0; i--) {
newString1 = newString1 + str[i];
}
return newString1;
}
console.log(revString('Hello'));

## TwoSums O(n^2)

let Arr = [0, -1, 2, -3, 1];
let x = -2; // number to find

function chkPair(Arr, x) {
for (i = 0; i < Arr.length - 1; i++) {
for (j = i + 1; j < Arr.length; j++) {
if (Arr[i] + Arr[j] == x) {
document.write(`Pair with a given sum '${x}' is ${Arr[i]} and ${Arr[j]}`);
return true;
}
}
}
return false;
}

if (chkPair(Arr, x)) {
document.write('<br/>Valid pair exists');
} else {
document.write('<br/>No valid pair exists for ' + x);
}

## TwoSums O(n)

function twoSum(arr, target) {
const previousValues = [];
for (let i = 0; i < arr.length; i++) {
const currentValue = arr[i];
const neededValue = target - currentValue;
const index2 = previousValues[neededValue];
if (index2 != null) {
return [previousValues[neededValue], i];
} else {
previousValues[currentValue] = i;
}
}

return [];
}

console.log(twoSum([10, 20, 30], 50));

## Check if Array

function checkIfArray(arr) {
if (Object.prototype.toString.call(arr) === '[object Array]') return 'array';
else return 'not an array';
}

function checkIfArray1(arr) {
if (typeof arr === 'string' && 'object') return 'Not Array';
else return 'ARRAY';
}

let x = [];

console.log(checkIfArray(x));
console.log(checkIfArray1(x));

## Empty Array

let arr = [10, 20, 30, 40];
// while (arr.length) arr.pop();
// arr.splice(0);
// arr.length = 0;
// arr = [];
console.log(arr);

## Check if integer

function checkNum(num) {
if (num == isNaN) return `${num} not a number`;
else return `${num} is a number `;
}
function checkInt(num) {
if (num % 1 == 0) return 'integer';
else return 'not an integer maybe decimal';
}

console.log(checkInt(2));
console.log(checkNum(2));

## Enqueue and Dequeue using 2 stacks

var inputStack = [10, 20, 30]; // First stack
var outputStack = [100, 200, 300]; // Second stack

function enqueue(stackInput, item) {
return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
if (stackOutput.length <= 0) {
while (stackInput.length > 0) {
var elementToOutput = stackInput.pop();
stackOutput.push(elementToOutput);
}
}

return stackOutput.pop();
}

// enqueue(inputStack, 'newItem');
// console.log(inputStack);
dequeue(inputStack, outputStack);
console.log(inputStack);
console.log(outputStack);

## Fizz buzz challenge

return fizz for multiples of 3
return buzz for multiples of 5
return fizzbuzz for multiples of 3 and 5

for (let i = 1; i < 100; i++) {
let f = i % 3 == 0;
let b = i % 5 == 0;
console.log(f ? (b ? 'fizzbuzz' : 'fizz') : b ? 'buzz' : i);
}

## Capitalize each words in a string

function cap(str){
const words = str.split(" ");
const CapWords = [];
words.forEach(item =>
CapWords.push(item[0].toUpperCase() + item.slice(1,item.length)));
return CapWords.join(" ");
}
cap("random words");

## Promise in JS:

const myPromise = new Promise((resolve, reject) => {
const x = 'lalit';
const y = 'laliit';
if (x == y) {
resolve();
} else {
reject();
}
});

myPromise
.then(() => console.log('x nd y are same'))
.catch(() => console.log('x and y not same'));

console.log(myPromise);

## Currying in JS:

const mul = (x) => (y) => (z) => {
return x _ y _ z;
};
console.log(mul(2)(2)(2));