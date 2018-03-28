var arrayDec = require('./arrayDec');
describe('arrayDec', function(){
    it("should return correctly", function(){
        expect(arrayDec([7,5,3,1])).toBe(true);
        expect(arrayDec([2])).toBe(true);
        expect(arrayDec([3,2,5,6])).toBe(false);
    });
});