var oddElement=require('./oddElement');
describe('oddElement',function(){
    it("should return correctly", function(){
        expect(oddElement([50, 60, 60, 45, 70])).toEqual([60,45]);
        expect(oddElement([100, 50])).toEqual([50]);
        expect(oddElement([80])).toEqual([]);
    });
});

