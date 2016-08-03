const mergeAndSortNumericArrays = require('./mergeAndSortNumericArrays');

describe('mergeAndSortNumericArrays()', () => {

  describe('mergeAndSortNumericArrays() method', () => {
    const arrayA = [1, 5, 2];
    const arrayB = [2, 3];
    const expectedResult = [ 1, 2, 2, 3, 5 ];
    const partialResult = [1, 2, 5];

    it('should sort 5 items is the increasing order', () => {
      expect(mergeAndSortNumericArrays(arrayA, arrayB)).toEqual(expectedResult);
    });

    it('sould return one array', () => {
      expect(mergeAndSortNumericArrays(arrayA, arrayB) instanceof Array).toBeTruthy();
    });

    it('should return correct result if one of array is empty', () => {
      expect(mergeAndSortNumericArrays(arrayA, [])).toEqual(partialResult);
    });

    it('should return an empty array if empty arrays were passed', () => {
      expect(mergeAndSortNumericArrays([], [])).toEqual([]);
    });
  });
});
