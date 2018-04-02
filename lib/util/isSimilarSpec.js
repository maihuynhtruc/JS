var isSimilar=require('./isSimilar');
describe('isSimilar',function() {
    it("should return correctly", function () {
        expect(isSimilar([2,3,3,2])).toBe(true);
        expect(isSimilar([2,3,4,1])).toBe(false);
        expect(isSimilar([2,1,2,1])).toBe(false);
        expect(isSimilar([2,3,3,4])).toBe(false);
        expect(isSimilar([2,4,1,2])).toBe(false);
    });
});
