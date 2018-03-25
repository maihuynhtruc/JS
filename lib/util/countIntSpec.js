var countInt = require('./countInt');
describe('countInt', function(){
    it("should return correctly", function(){
        expect(countInt(0)).toBe(1);
        expect(countInt(239017)).toBe(6);
        expect(countInt(134008)).toBe(6);
        expect(countInt(10)).toBe(2);
        expect(countInt(110)).toBe(3);
        expect(countInt(1010)).toBe(4);
        expect(countInt(26153)).toBe(5);
        expect(countInt(100000000)).toBe(9);
        });
});
