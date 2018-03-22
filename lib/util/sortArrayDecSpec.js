var sortArrayDec = require('./sortArrayDec');
describe('sortArrayDec', function(){
    it("should return correctly", function(){
        expect(sortArrayDec([1,7,5,3,2])).toEqual([7,5,3,2,1]);
        expect(sortArrayDec([1])).toEqual([1]);
        expect(sortArrayDec([-1,7,0,5,3,-22])).toEqual([7,5,3,0,-1,-22]);
        expect(sortArrayDec([-2,-1])).toEqual([-1,-2]);
    });
});
