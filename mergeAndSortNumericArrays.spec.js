const mergeAndSortNumericArrays = require('./merge-and-sort');

describe('mergeAndSortNumericArrays()', () => {

  describe('mergeAndSortNumericArrays() method', () => {
    const arrayA = [1, 2, 5];
    const arrayB = [2, 3];
    const expectedResult = [1, 2, 3, 4, 5];

    it('sould return one array', () => {
      expect(QuickSort.sort(false, arrayA, arrayB) instanceof Array).toBeTruthy();
    });

    it('should sort 5 items is the increasing order', () => {
      expect(QuickSort.sort(true, arrayA, arrayB)).toEqual(expectedResult);
    });

    it('should sort 5 000 items faster than defaul Array.sort() implementation', () => {
      const arrayA = [1, 2, 5];
      const arrayB = [2, 3];
      const expectedResult = [1, 2, 3, 4, 5];

      expect(QuickSort.sort(arrayA, arrayB)).toEqual(expectedResult);
    });

    it('should throw an error if no params passed', () => {
      //TODO
    });

    it('should throw an error if no arrays passed', () => {
      //TODO
    });

    it('should throw an error if not a numeric arrays passed', () => {
      //TODO
    });
  });
});
