var isLucky=require('./isLucky');
describe('isLucky', function(){
    it("should return correctly", function(){
        expect(isLucky(1230)).toBe(true);
        expect(isLucky(239017)).toBe(false);
        expect(isLucky(134008)).toBe(true);
        expect(isLucky(10)).toBe(false);
        expect(isLucky(11)).toBe(true);
        expect(isLucky(1010)).toBe(true);
        expect(isLucky(261534)).toBe(false);
        expect(isLucky(100000)).toBe(false);
        expect(isLucky(999999)).toBe(true);
        expect(isLucky(123321)).toBe(true);
    });
});


