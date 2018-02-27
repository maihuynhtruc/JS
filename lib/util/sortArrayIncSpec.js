var sortArrayInc = require('./sortArrayInc');
describe('sortArrayInc', function(){
    it("should return correctly", function(){
        expect(sortArrayInc([1,7,5,3,2])).toEqual([1,2,3,5,7]);
        expect(sortArrayInc([1])).toEqual([1]);
        expect(sortArrayInc([-1,7,0,5,3,-22])).toEqual([-22,-1,0,3,5,7]);
        expect(sortArrayInc([0,-1])).toEqual([-1,0]);
    });
});
