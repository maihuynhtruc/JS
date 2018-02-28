var evenElement=require('./evenElement');
describe('evenElement',function(){
    it("should return correctly", function(){
        expect(evenElement([50, 60, 60, 45, 70])).toEqual([50,60,70]);
        expect(evenElement([100, 50])).toEqual([100]);
        expect(evenElement([80])).toEqual([80]);
    });
});
