//have 34case:17 show
var almostIncreasingSequence = require('./almostIncreasingSequence');
describe('almostIncreasingSequence', function(){
    it("should return correctly", function(){
        expect(almostIncreasingSequence([1, 2, 1, 2])).toBe(false);
        expect(almostIncreasingSequence([1, 4, 10, 4, 2])).toBe(false);
        expect(almostIncreasingSequence([10, 1, 2, 3, 4, 5])).toBe(true);
        expect(almostIncreasingSequence([1, 1, 1, 2, 3])).toBe(false);
        expect(almostIncreasingSequence([0, -2, 5, 6])).toBe(true);
        expect(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6])).toBe(false);
        expect(almostIncreasingSequence([40, 50, 60, 10, 20, 30])).toBe(false);
        expect(almostIncreasingSequence([1, 1])).toBe(true);
        expect(almostIncreasingSequence([1, 2, 5, 3, 5])).toBe(true);
        expect(almostIncreasingSequence([1, 2, 5, 5, 5])).toBe(false);
        expect(almostIncreasingSequence([10, 1, 2, 3, 4, 5, 6, 1])).toBe(false);
        expect(almostIncreasingSequence([1, 2, 3, 4, 3, 6])).toBe(true);
        expect(almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6])).toBe(true);
        expect(almostIncreasingSequence([123, -17, -5, 1, 2, 3, 12, 43, 45])).toBe(true);
        expect(almostIncreasingSequence([3, 5, 67, 98, 3])).toBe(true);
    });
});