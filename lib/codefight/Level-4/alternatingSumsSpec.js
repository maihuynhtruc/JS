var alternatingSums=require('./alternatingSums');
describe('alternatingSums',function(){
    it("should return correctly", function(){
        expect(alternatingSums([50, 60, 60, 45, 70])).toEqual([180, 105]);
        expect(alternatingSums([100, 50])).toEqual([100, 50]);
        expect(alternatingSums([80])).toEqual([80, 0]);
    });
});
