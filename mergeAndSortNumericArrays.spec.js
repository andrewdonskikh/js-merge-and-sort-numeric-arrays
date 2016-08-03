const mergeAndSortNumericArrays = require('./mergeAndSortNumericArrays');

describe('mergeAndSortNumericArrays()', () => {

  describe('mergeAndSortNumericArrays() method', () => {
    const arrayA = [1, 2, 5];
    const arrayB = [2, 3];
    const mixedArray = ['a', 2, 'b', 3, 'c'];
    const expectedResult = [1, 2, 2, 3, 4, 5];
    
    it('sould return one array', () => {
      expect(mergeAndSortNumericArrays(arrayA, arrayB) instanceof Array).toBeTruthy();
    });

    it('should sort 5 items is the increasing order', () => {
      expect(mergeAndSortNumericArrays(arrayA, arrayB)).toEqual(expectedResult);
    });

    it('should return correct result if one of array is empty', () => {
      expect(mergeAndSortNumericArrays(arrayA, [])).toEqual(arrayA);
    });

    it('should return an empty array if empty arrays were passed', () => {
      expect(mergeAndSortNumericArrays([], [])).toEqual([]);
    });

    it('should cut off not numeric values are return correct result', () => {
      expect(mergeAndSortNumericArrays(arrayA, mixedArray)).toEqual(expectedResult);
    });
  });
});
