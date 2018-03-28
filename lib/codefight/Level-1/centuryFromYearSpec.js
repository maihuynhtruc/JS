var centuryFromYear = require('./centuryFromYear');
describe('centuryFromYear', function(){
    it("should return correctly", function(){
        expect(centuryFromYear(1905)).toBe(20);
        expect(centuryFromYear(1700)).toBe(17);
        expect(centuryFromYear(1988)).toBe(20);
        expect(centuryFromYear(2000)).toBe(20);
        expect(centuryFromYear(2001)).toBe(21);
        expect(centuryFromYear(200)).toBe(2);
        expect(centuryFromYear(374)).toBe(4);
        expect(centuryFromYear(45)).toBe(1);
        expect(centuryFromYear(8)).toBe(1);
    });
});
