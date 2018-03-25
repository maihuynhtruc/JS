var sumStr = require('./sumStr');
describe('sumStr', function(){
    it("should return correctly", function () {
        expect(sumStr("1230")).toBe(6);
        expect(sumStr("0")).toBe(0);
        expect(sumStr("239017")).toBe(22);
        expect(sumStr("134008")).toBe(16);
        expect(sumStr("10")).toBe(1);
        expect(sumStr("110")).toBe(2);
        expect(sumStr("1010")).toBe(2);
        expect(sumStr("26153")).toBe(17);
        expect(sumStr("100000000")).toBe(1);
    });
});
