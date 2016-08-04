/**
* Function that takes few arrays of numbers, merge them and sort
* using quick sort algorithm, as a most affecient for the
* large arrays - O(n log n).
* No any dependencies. Fast and effective.
* @param ...arrays Some number of numeric arrays
* @param {boolean} [checkForTypes] optional
* It will make algorithm much slowly but bring
* additional securty value if needed
* set it a last parameter if needed
* @return {Array}
*/
const mergeAndSortNumericArrays = (...arrays) => {

  const lastParam = arrays[arrays.length - 1];
  const checkForTypes = typeof lastParam === 'boolean' && lastParam === true
    ? true
    : false;

  const cleanedArrays = checkAndCleanUpArrays(checkForTypes, ...arrays);
  const mergedArray = mergeArrays(cleanedArrays);
  const sortedArray = sort(mergedArray);

  return sortedArray;
}

/**
* Check wether arrays were passed, clean fom non-numeric values
* @private
* @param {boolean} checkForTypes
* @param ...arrays Some number of arrays
* @throws Will throw an error if they were not passed
* or not array were passed
*/
function checkAndCleanUpArrays(checkForTypes, ...arrays) {
  if(arrays.length === 0) {
    throw new Error('Please specify at least two numeric arrays');
  }

  // Remove last optional parameter if exists
  if( typeof arrays[arrays.length - 1] === 'boolean') {
    arrays.pop();
  }

  let cleanedArrays = [];

  arrays.forEach((array) => {
    if(!(array instanceof Array)) {
      throw new Error('Please specify at least two numeric arrays');

    } else if(checkForTypes) {
      cleanedArrays.push(removeNonNumvericValuesFrom(array));
    }
  });

  return checkForTypes ? cleanedArrays : arrays;
}

/**
* Remove non-numeric values from the array
* @private
* @param {Array} array Aray to check
*/
function removeNonNumvericValuesFrom(array) {
  return array.filter((item) => {
    return isNumber(item);
  });
}

/**
 * Check whether the passed value is a number
 * @private
 * @param {number} value Value to check
 */
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
* Merge arrays
* @private
* @param {Array.<Array>} arrays Array of arrays
* @return {Array}
*/
function mergeArrays(arrays) {
  const mergedArray = arrays.reduce((prev, next) => {
    return prev.concat(next);
  }, []);

  return mergedArray;
}

/**
* Sort array using quick sort algorithm
* @private
* @param {Array} array
* @return {Array} sorted array
*/
function sort(array, leftPointer, rightPointer) {
  // Skip all logic if passed empty or one-element array
  if (array.length <= 1) {
    return array;
  }
  // Set default values for the pointer places
  leftPointer = leftPointer || 0;
  rightPointer = rightPointer || array.length - 1;

  // Run array processing
  let leftPointerPosition = processArray(array, leftPointer, rightPointer);

  // If left pointer is less than left pointer position
  // that means - there are items on the left to be sorted
  if(leftPointer < leftPointerPosition - 1) {
    sort(array, leftPointer, leftPointerPosition - 1);
  }
  // If right pointer is greater than left pointer position
  // that means - there are items on the right to be sorted
  if(rightPointer > leftPointerPosition) {
    sort(array, leftPointerPosition, rightPointer);
  }

  return array;
}

/**
* Run processing of array with algorithm and given boundaries
* @private
* @param {Array} array Array to process
* @param {number} left Left pointer
* @param {number} right Right pointer
*/
function processArray(array, left, right) {
  // The middle point of the array.
  const pivot = array[Math.floor((right + left) / 2)];
  let leftPointer = left;
  let rightPointer = right;

  while(leftPointer < rightPointer) {
    // Increase the left pointer while it's less than pivot point.
    while(array[leftPointer] < pivot) {
      leftPointer++;
    }
    // Decrease the right pointer while it's greater than pivot point.
    while(array[rightPointer] > pivot) {
      rightPointer--;
    }
    // If left pointer is less or equal to the right pointer -
    // swap them in the array.
    if(leftPointer <= rightPointer) {
      swapValues(array, leftPointer, rightPointer);
      // Make one more step to determine where we should stop
      leftPointer++;
      rightPointer--;
    }
  }

  return leftPointer;
}

/**
* Swap the values
* @private
* @param {array} array
* @param {number} firstValue
* @param {number} secondValue
*/
function swapValues(array, firstValue, secondValue) {
  const buffer = array[firstValue];
  array[firstValue] = array[secondValue];
  array[secondValue] = buffer;
}

module.exports = mergeAndSortNumericArrays;
