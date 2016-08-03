const mergeAndSortNumericArrays = require('./mergeAndSortNumericArrays');
const arrayA = [1, 5, 2];
const arrayB = [2, 3];

// Set up initial values
let longArrayA = [];
let longArrayB = [];

fill(longArrayA, 10000);
fill(longArrayB, 40000);

/**
* Fill array with a random values
* @private
* @param {array} array
* @param {number} amountOfElements
*/
function fill(array, amountOfElements) {
    for(let i = 0; i < amountOfElements; i++) {
      array.push(Math.floor(Math.random() * amountOfElements));
    }
}

/**
* Default V8 sort implementation
* @private
* @param {Array} arrayA
* @param {Array} arrayB
* @return {Array}
*/
function defaultSort(arrayA, arrayB) {
  return arrayA.concat(arrayB).sort();
}

/**
* Test function's efficiency and log the time
* @private
* @param {function} func Function to execute
* @param {string} name Name of the function
*/
function testWithTimer(func, name) {
  let beginTime, endTime, sumTimes = 0;
  beginTime = +new Date();

  const longResult = func(longArrayA, longArrayB);

  endTime = +new Date();
  sumTimes += endTime - beginTime;

  console.log(`${name} took: ${sumTimes} milliseconds.`);
}

// Test simple case
const fastResult = mergeAndSortNumericArrays(arrayA, arrayB);
console.log(`Fast result: ${fastResult}`);

// Test with long arrays and compare with defulat implementaion
console.log(`With ${longArrayA.length + longArrayB.length} elements:`);
testWithTimer(mergeAndSortNumericArrays, 'quick sort');
testWithTimer(defaultSort, 'default sort');
