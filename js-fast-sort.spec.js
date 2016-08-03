const QuickSort = require('./quickSort');

describe('QuickSort', () => {
  describe('Check interface', () => {
    it('should be contain the sort() method', () => {
      expect(QuickSort.sort()).toBeDefined();
    });
  });
});
