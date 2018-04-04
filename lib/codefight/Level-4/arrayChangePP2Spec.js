var arrayChangePP2=require('./arrayChangePP2');
describe('arrayChangePP2', function(){
    it("should return correctly", function(){
        expect(arrayChangePP2([1,1,1])).toBe(3);
        expect(arrayChangePP2([-1000, 0, -2, 0])).toBe(5);
        expect(arrayChangePP2([2, 1, 10, 1])).toBe(12);
        expect(arrayChangePP2([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15])).toBe(13);
    });
});
