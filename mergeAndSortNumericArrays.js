/**
* Function that takes few arrays of numbers, merge them and sort
* using quick sort algorithm, as a most affecient for the
* large arrays - O(n log n).
* No any dependencies. Fast and effective.
* @param ...arrays Some number of numeric arrays
* @return {Array}
*/
const mergeAndSortNumericArrays = (...arrays) => {
  const mergedArray = mergeArrays(...arrays);
  const sortedArray = sort(mergedArray);

  return sortedArray;
}

/**
* Merge arrays
* @private
* @param ...arrays Some number of numeric arrays
* @return {Array}
*/
function mergeArrays(...arrays) {
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
