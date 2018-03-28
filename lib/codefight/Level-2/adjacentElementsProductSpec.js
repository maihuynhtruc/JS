var adjacentElementsProduct = require('./adjacentElementsProduct');
describe('adjacentElementsProduct', function(){
    it("Should return correctly", function(){
          expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21);
          expect(adjacentElementsProduct([-1, -2])).toBe(2);
          expect(adjacentElementsProduct([5, 1, 2, 3, 1, 4])).toBe(6);
          expect(adjacentElementsProduct([1, 2, 3, 0])).toBe(6);
          expect(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])).toBe(50);
          expect(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])).toBe(30);
          expect(adjacentElementsProduct([4, 1, 2, 3, 1, 5])).toBe(6);
          expect(adjacentElementsProduct([-23, 4, -3, 8, -12])).toBe(-12);
          expect(adjacentElementsProduct([1, 0, 1, 0, 1000])).toBe(0);
    });
});