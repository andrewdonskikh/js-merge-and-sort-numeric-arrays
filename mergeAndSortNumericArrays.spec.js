const mergeAndSortNumericArrays = require('./mergeAndSortNumericArrays');

describe('mergeAndSortNumericArrays()', () => {
  const arrayA = [1, 5, 2];
  const arrayB = [2, 3];
  const mixedArray = [2, 'a', 3, true, null];
  const arrayWithNegatives = [-1, -4, -9];
  const expectedResult = [ 1, 2, 2, 3, 5 ];
  const partialExpectedResult = [1, 2, 5];
  const expectedResultWithNegatives = [ -9, -4, 1, -1, 2, 5 ];

  it('should sort 5 items is the increasing order', () => {
    expect(mergeAndSortNumericArrays(arrayA, arrayB)).toEqual(expectedResult);
  });

  it('should sort arrays with negatives correctly', () => {
    expect(mergeAndSortNumericArrays(arrayA, arrayWithNegatives)).toEqual(expectedResultWithNegatives);
  });

  it('should clear non numeric values and return correct result', () => {
    expect(mergeAndSortNumericArrays(arrayA, mixedArray, true)).toEqual(expectedResult);
  });

  it('sould return one array', () => {
    expect(mergeAndSortNumericArrays(arrayA, arrayB) instanceof Array).toBeTruthy();
  });

  it('should return correct result if one of array is empty', () => {
    expect(mergeAndSortNumericArrays(arrayA, [])).toEqual(partialExpectedResult);
  });

  it('should return an empty array if empty arrays were passed', () => {
    expect(mergeAndSortNumericArrays([], [])).toEqual([]);
  });

  it('should throw an error if not an array was passed', () => {
      expect(() => {
          mergeAndSortNumericArrays(123, []);
      }).toThrow(new Error('Please specify at least two numeric arrays'));
  });

  it('should throw an error if the function was called wihtout any params', () => {
      expect(() => {
          mergeAndSortNumericArrays();
      }).toThrow(new Error('Please specify at least two numeric arrays'));
  });
});
