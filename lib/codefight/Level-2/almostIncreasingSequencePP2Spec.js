var almostIncreasingSequencePP2 = require("./almostIncreasingSequencePP2");
describe('almostIncreasingSequencePP2', function(){
    it("should return correctly", function(){
         expect(almostIncreasingSequencePP2([1])).toBe(true);
         expect(almostIncreasingSequencePP2([1, 3, 2, 1])).toBe(false);
         expect(almostIncreasingSequencePP2([1, 3, 2])).toBe(true);
         expect(almostIncreasingSequencePP2([1, 2, 1, 2])).toBe(false);
         expect(almostIncreasingSequencePP2([1, 4, 10, 4, 2])).toBe(false);
         expect(almostIncreasingSequencePP2([10, 1, 2, 3, 4, 5])).toBe(true);
         expect(almostIncreasingSequencePP2([1, 1, 1, 2, 3])).toBe(false);
         expect(almostIncreasingSequencePP2([0, -2, 5, 6])).toBe(true);
         expect(almostIncreasingSequencePP2([1, 2, 3, 4, 5, 3, 5, 6])).toBe(false);
         expect(almostIncreasingSequencePP2([40, 50, 60, 10, 20, 30])).toBe(false);
         expect(almostIncreasingSequencePP2([1, 1])).toBe(true);
         expect(almostIncreasingSequencePP2([1, 2, 5, 3, 5])).toBe(true);
         expect(almostIncreasingSequencePP2([1, 2, 5, 5, 5])).toBe(false);
         expect(almostIncreasingSequencePP2([10, 1, 2, 3, 4, 5, 6, 1])).toBe(false);
         expect(almostIncreasingSequencePP2([1, 2, 3, 4, 3, 6])).toBe(true);
         expect(almostIncreasingSequencePP2([1, 2, 3, 4, 99, 5, 6])).toBe(true);
         expect(almostIncreasingSequencePP2([123, -17, -5, 1, 2, 3, 12, 43, 45])).toBe(true);
         expect(almostIncreasingSequencePP2([3, 5, 67, 98, 3])).toBe(true);
    });
});