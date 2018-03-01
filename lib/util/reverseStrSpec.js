var reverseStr = require('./reverseStr');
describe('reverseStr', function(){
    it("should return correctly", function(){
        expect(reverseStr("abc")).toEqual("cba");
        expect(reverseStr("a")).toEqual("a");
        expect(reverseStr("abcdef")).toEqual("fedcba");
    });
});