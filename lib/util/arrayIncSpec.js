var arrayInc = require('./arrayInc');
describe('arrayInc', function(){
    it("should return correctly", function(){
        expect(arrayInc([1, 3, 2, 1])).toBe(false);
        expect(arrayInc([-2, 5, 6])).toBe(true);
        expect(arrayInc([1])).toBe(true);
        });
});