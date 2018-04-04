var arrayChange=require('./arrayChange');
describe('arrayChange', function(){
    it("should return correctly", function(){
        expect(arrayChange([1,1,1])).toBe(3);
        expect(arrayChange([-1000, 0, -2, 0])).toBe(5);
        expect(arrayChange([2, 1, 10, 1])).toBe(12);
        expect(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15])).toBe(13);
    });
});
